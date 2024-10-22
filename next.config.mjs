/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: "export",
    assetPrefix: isProd ? '/bicycle-shop/' : '',
    basePath: isProd ? '/bicycle-shop' : '',
    trailingSlash: true, 
};

export default nextConfig;
