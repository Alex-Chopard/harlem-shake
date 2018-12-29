const webpack = require('webpack')
const path = require('path')

require('dotenv').config()

function getPath (file) {
  return path.join(__dirname, '..', file)
}

module.exports = {
  entry: {
    app: [
      // 'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    filename: 'index.js',
    path: getPath('dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': getPath('src')
    }
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        include: [ getPath('src') ],
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new webpack.DefinePlugin({
      'process.env.FLUENTFFMPEG_COV': false
    })
  ]
}
