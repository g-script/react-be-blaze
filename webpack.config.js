/* NPM Modules */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cssnext = require('postcss-cssnext')
const postcssImport = require('postcss-import')
const merge = require('webpack-merge')
const validate = require('webpack-validator')

/* Utils */
const parts = require('./webpack-config')

/* Paths */
const PATHS = {
  app: path.join(__dirname, 'src'),
  style: [
    path.join(__dirname, 'src', 'styles', 'main.css')
  ],
  build: path.join(__dirname, 'public')
}

/* Shared config */
const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.app, 'index.html'),
      hash: false,
      filename: 'index.html',
      inject: true,
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      cssnext({
        autoprefixer: {
          browsers: ['> 1%']
        },
        features: {
          colorGray: false,
          colorHwb: false,
          colorHexAlpha: false,
          colorRebeccapurple: false,
          initial: false
        }
      })
    ]
  }
}

let config

// Detect how npm is run and branch based on that
switch (process.env.NODE_ENV) {
  case 'production':
    config = merge(
      common, {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          publicPath: '/react-be-blaze/',
          filename: '[name].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.minify(),
      parts.extractCSS(PATHS.style)
    )

    break
  default:
    config = merge(
      common, {
        devtool: 'eval-source-map'
      },
      parts.setupCSS(PATHS.style),
      parts.devServer({
        host: 'localhost',
        port: '3000'
      })
    )

    break
}

// Run validator in quiet mode to avoid output in stats
module.exports = validate(config) // , { quiet: true })
