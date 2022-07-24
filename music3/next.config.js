/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const webpack = require('webpack')
const { parsed: myEnv } = require('dotenv').config({
  path:'./.env'
})

module.exports = nextConfig
module.exports = {
  webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
      return config
  }
}

module.exports = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}