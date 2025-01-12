/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Vercel
  output: 'export',
  // Disable image optimization during export
  images: {
    unoptimized: true
  },
  // Add transpilePackages for React Native components
  transpilePackages: [
    'react-native',
    'react-native-markdown-display',
    'expo-file-system'
  ]
}

module.exports = nextConfig 