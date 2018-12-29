const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack-base.config')

require('dotenv').config()

function getPath (file) {
  return path.join(__dirname, '..', file)
}

module.exports = merge(baseWebpackConfig, {
  devServer: {
    host: 'localhost',
    port: process.env.PORT || 8000,
    contentBase: getPath('dist'),
    compress: true,
    open: true
  },
  mode: 'development'
})
