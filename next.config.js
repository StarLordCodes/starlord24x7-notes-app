/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:notes*',
            destination: '/notes',
          },
        ]
      },
}

module.exports = nextConfig
