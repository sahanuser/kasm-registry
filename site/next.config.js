/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Aster Globel',
    description: 'The official store for Aster workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://sahanuser.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
