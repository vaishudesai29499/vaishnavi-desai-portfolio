/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'http', hostname: '**' },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/job-radar', destination: '/ai-hunt/job-radar', permanent: true },
      { source: '/news', destination: '/ai-hunt/news', permanent: true },
      { source: '/blog', destination: '/ai-hunt/blog', permanent: true },
      { source: '/quiz', destination: '/ai-hunt/quiz', permanent: true },
      { source: '/jobs', destination: '/ai-hunt/jobs', permanent: true },
      { source: '/jobs/:category', destination: '/ai-hunt/jobs/:category', permanent: true },
      { source: '/portfolio', destination: '/', permanent: true },
      { source: '/portfolio/:path*', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
