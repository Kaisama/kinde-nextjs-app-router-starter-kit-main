/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the "output: export" configuration
    // output: "export",
    serverRuntimeConfig: {
      port: 9124,
    },
  };
  
  export default nextConfig;