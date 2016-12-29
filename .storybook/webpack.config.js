module.exports = {
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]&importLoaders=1']
    }]
  }
}
