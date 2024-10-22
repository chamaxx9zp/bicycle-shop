/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: isProd ? '/bicycle-shop/' : '',
    basePath: isProd ? '/bicycle-shop' : '',
    trailingSlash: true, 
};

export default nextConfig;
