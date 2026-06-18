import { DEFAULT_STATE } from "../default_state.js";

async function hashPassword(password, salt) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}

async function getAuthUser(request, env) {
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  const token = authHeader.substring(7);
  return await env.PIONOTES_KV.get(`session:${token}`);
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  });
}

// GET /api/admin/users - List users (Admin only)
export async function onRequestGet(context) {
  const { request, env } = context;
  
  try {
    const authUser = await getAuthUser(request, env);
    if (authUser !== "admin") {
      return jsonResponse({ success: false, error: "Yetkisiz erişim. Sadece yönetici yetkisi gerekir." }, 403);
    }
    
    // List all keys starting with 'user:'
    const listResult = await env.PIONOTES_KV.list({ prefix: "user:" });
    const users = listResult.keys.map(k => {
      const username = k.name.substring(5); // Remove 'user:'
      return {
        username,
        createdAt: k.metadata?.createdAt || null
      };
    });
    
    return jsonResponse({ success: true, users });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500);
  }
}

// POST /api/admin/users - Create a user (Admin only)
export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const authUser = await getAuthUser(request, env);
    if (authUser !== "admin") {
      return jsonResponse({ success: false, error: "Yetkisiz erişim." }, 403);
    }
    
    const { username, password } = await request.json();
    if (!username || !password) {
      return jsonResponse({ success: false, error: "Kullanıcı adı ve şifre zorunludur." }, 400);
    }
    
    const trimmedUsername = username.trim().toLowerCase();
    
    if (trimmedUsername === "admin" || trimmedUsername === (env.ADMIN_ID || "admin").toLowerCase()) {
      return jsonResponse({ success: false, error: "Bu kullanıcı adı rezerve edilmiştir." }, 400);
    }
    
    const userKey = `user:${trimmedUsername}`;
    const userExists = await env.PIONOTES_KV.get(userKey);
    if (userExists) {
      return jsonResponse({ success: false, error: "Bu kullanıcı adı zaten kullanılmaktadır." }, 400);
    }
    
    // Create new user
    const salt = crypto.randomUUID();
    const passwordHash = await hashPassword(password, salt);
    const createdAt = Date.now();
    
    const userData = {
      passwordHash,
      salt,
      createdAt
    };
    
    // Save credentials with metadata
    await env.PIONOTES_KV.put(userKey, JSON.stringify(userData), {
      metadata: { username: trimmedUsername, createdAt }
    });
    
    // Pre-seed notes data
    const notesKey = `notes:${trimmedUsername}`;
    await env.PIONOTES_KV.put(notesKey, JSON.stringify(DEFAULT_STATE));
    
    return jsonResponse({ success: true, user: { username: trimmedUsername, createdAt } });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500);
  }
}

// DELETE /api/admin/users - Delete a user (Admin only)
export async function onRequestDelete(context) {
  const { request, env } = context;
  
  try {
    const authUser = await getAuthUser(request, env);
    if (authUser !== "admin") {
      return jsonResponse({ success: false, error: "Yetkisiz erişim." }, 403);
    }
    
    const { username } = await request.json();
    if (!username) {
      return jsonResponse({ success: false, error: "Kullanıcı adı belirtilmelidir." }, 400);
    }
    
    const trimmedUsername = username.trim().toLowerCase();
    
    // Delete user credentials
    await env.PIONOTES_KV.delete(`user:${trimmedUsername}`);
    
    // Delete user notes
    await env.PIONOTES_KV.delete(`notes:${trimmedUsername}`);
    
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500);
  }
}
