/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so stray lockfiles in parent directories
  // do not confuse Turbopack.
  turbopack: {
    root: import.meta.dirname,
  },
  async rewrites() {
    // The catering experience is a separate Next.js app deployed on Vercel.
    // Proxy /catering through this deployment so both apps share one domain.
    return [
      {
        source: '/catering',
        destination: 'https://masterpeacecatering.vercel.app/catering',
      },
      {
        source: '/catering/:path*',
        destination: 'https://masterpeacecatering.vercel.app/catering/:path*',
      },
    ]
  },
}

export default nextConfig
