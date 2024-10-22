/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    // output: "export",
    assetPrefix: isProd ? '/bicycle-shop/' : '',
    basePath: isProd ? '/bicycle-shop' : '',
    trailingSlash: true, 
    // images: {
    //   unoptimized: true, // Disable Image Optimization
    // },
};

export default nextConfig;
