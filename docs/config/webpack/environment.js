const { generateWebpackConfig } = require('shakapacker')

const webpackConfig = generateWebpackConfig()

// webpack 5 defaults to md4 hashing, which OpenSSL 3 (Node 17+) refuses.
// xxhash64 is a non-crypto hash that avoids the ERR_OSSL_EVP_UNSUPPORTED error.
webpackConfig.output = webpackConfig.output || {}
webpackConfig.output.hashFunction = 'xxhash64'

// Insert resolve-url-loader ahead of sass-loader so url() references in SCSS
// resolve relative to the importing file rather than the entry pack.
webpackConfig.module.rules.forEach((rule) => {
  if (!Array.isArray(rule.use)) return

  const sassLoaderIndex = rule.use.findIndex(
    (entry) => typeof entry === 'object' && /sass-loader/.test(entry.loader || '')
  )

  if (sassLoaderIndex !== -1) {
    rule.use.splice(sassLoaderIndex, 0, { loader: 'resolve-url-loader' })
  }
})

module.exports = webpackConfig
