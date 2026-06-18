import { DEFAULT_STATE } from "./default_state.js";

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

// GET /api/notes - Get notes of authenticated user
export async function onRequestGet(context) {
  const { request, env } = context;
  
  try {
    const username = await getAuthUser(request, env);
    if (!username) {
      return jsonResponse({ success: false, error: "Yetkisiz erişim." }, 401);
    }
    
    const notesKey = `notes:${username}`;
    let notesData = await env.PIONOTES_KV.get(notesKey);
    
    if (!notesData) {
      // Seed notes for new user
      notesData = JSON.stringify(DEFAULT_STATE);
      await env.PIONOTES_KV.put(notesKey, notesData);
    }
    
    return jsonResponse(JSON.parse(notesData));
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500);
  }
}

// PUT /api/notes - Update notes of authenticated user
export async function onRequestPut(context) {
  const { request, env } = context;
  
  try {
    const username = await getAuthUser(request, env);
    if (!username) {
      return jsonResponse({ success: false, error: "Yetkisiz erişim." }, 401);
    }
    
    const body = await request.json();
    if (!body || !body.folders || !body.notes || !body.settings) {
      return jsonResponse({ success: false, error: "Geçersiz veri formatı." }, 400);
    }
    
    const notesKey = `notes:${username}`;
    await env.PIONOTES_KV.put(notesKey, JSON.stringify(body));
    
    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, error: error.message }, 500);
  }
}
