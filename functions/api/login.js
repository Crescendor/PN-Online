// Hashing function using Web Crypto API
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

export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const { username, password } = await request.json();
    
    if (!username || !password) {
      return jsonResponse({ success: false, error: "Kullanıcı adı ve şifre zorunludur." }, 400);
    }

    const trimmedUsername = username.trim().toLowerCase();
    
    // 1. Check Admin Credentials against Environment Secrets
    const adminId = (env.ADMIN_ID || "admin").toLowerCase();
    const adminPassword = env.ADMIN_PASSWORD || "admin1234"; // Default fallback if secret not set yet
    
    if (trimmedUsername === adminId && password === adminPassword) {
      const token = crypto.randomUUID();
      // Store session in KV for 7 days
      await env.PIONOTES_KV.put(`session:${token}`, "admin", { expirationTtl: 7 * 24 * 60 * 60 });
      
      return jsonResponse({
        success: true,
        token,
        role: "admin",
        username: "admin"
      });
    }

    // 2. Check regular user accounts in KV
    const userKey = `user:${trimmedUsername}`;
    const userDataStr = await env.PIONOTES_KV.get(userKey);
    
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      const computedHash = await hashPassword(password, userData.salt);
      
      if (computedHash === userData.passwordHash) {
        const token = crypto.randomUUID();
        // Store session in KV for 7 days
        await env.PIONOTES_KV.put(`session:${token}`, trimmedUsername, { expirationTtl: 7 * 24 * 60 * 60 });
        
        return jsonResponse({
          success: true,
          token,
          role: "user",
          username: trimmedUsername
        });
      }
    }

    // 3. Unauthorized
    return jsonResponse({ success: false, error: "Geçersiz kullanıcı adı veya şifre!" }, 401);
    
  } catch (error) {
    return jsonResponse({ success: false, error: "Sunucu hatası: " + error.message }, 500);
  }
}
