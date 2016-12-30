/* NPM Modules */
const pack = require('./package')
const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const libraryName = pack.name

const config = {
  entry: path.join(__dirname, 'src', 'index'),
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: `${libraryName}.min.js`,
    library: libraryName,
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-2'],
        plugins: ['transform-class-properties']
      }
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      minimize: true
    })
  ],
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }]
}

module.exports = validate(config)
