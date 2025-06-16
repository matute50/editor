import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // NO pongas `output: 'export'` si usás funcionalidades de servidor como Server Actions o llamadas a Supabase
}

export default nextConfig


