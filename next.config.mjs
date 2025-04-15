/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'covers.openlibrary.org',
          pathname: '/**',
        }
      ],
    },
  };
  
  export default nextConfig;
  
