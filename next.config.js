/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Vercel
  output: 'export',
  // Disable image optimization during export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 