const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: { codeblocks: true },
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true,
})
