/** @type {import('next').NextConfig} */
module.exports = {  
  // output: 'standalone', 
  images:{
    unoptimized: true
  },
  // compress: false,
  // minify: false,
  webpack: (config, { isServer }) => {
    // Disable minification for export
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
}