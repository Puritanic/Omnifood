const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    App: './app/assets/scripts/App.js', // tell webpack which file should it be looking for to bundle it
    Vendor: './app/assets/scripts/Vendor.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env',
              {
                targets: {
                  browsers: ['last 2 versions', 'safari >= 7']
                }
              }
            ]
          ]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};

// todo mocha testing after bundling
