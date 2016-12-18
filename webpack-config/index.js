const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

/**********
 * SERVER *
 **********/

module.exports.devServer = function ({ host = process.env.HOST, port = process.env.PORT }) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0'
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: host, // Defaults to `localhost`
      port: port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({ multiStep: true })
    ]
  }
}

/******
 * JS *
 ******/

module.exports.minify = function () {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }
}

module.exports.clean = function (path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  }
}

/*******
 * CSS *
 *******/

module.exports.setupCSS = function (paths) {
  return {
    module: {
      loaders: [{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]&importLoaders=1', 'postcss-loader']
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }]
    }
  }
}

module.exports.extractCSS = function (paths) {
  return {
    module: {
      // Extract CSS during build
      loaders: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]&importLoaders=1', 'postcss-loader')
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
      }]
    },
    // Output extracted CSS to a file
    plugins: [new ExtractTextPlugin('[name].[chunkhash].css')]
  }
}

/********
 * MISC *
 ********/

module.exports.setFreeVariable = function (key, value) {
  const env = {}

  env[key] = JSON.stringify(value)

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  }
}

module.exports.extractBundle = function (options) {
  const entry = {}

  entry[options.name] = options.entries

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  }
}
