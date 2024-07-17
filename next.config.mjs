/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'hbzmkhevcxypgioixlqy.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/Books/**',
          },
        ],
      },
};  

export default nextConfig;
