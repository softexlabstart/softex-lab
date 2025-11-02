import type { APIRoute } from 'astro';

export const prerender = false;

// WARNING: endpoint removed for production. Kept to return a 410 Gone to avoid accidental usage.
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ ok: false, error: 'Endpoint removed: use production SMTP configuration' }), { status: 410 });
};
