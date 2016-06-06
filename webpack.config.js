var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      'store': path.join(__dirname, 'src/store'),
      'actions': path.join(__dirname, 'src/actions'),
      'reducers': path.join(__dirname, 'src/reducers'),
      'selectors': path.join(__dirname, 'src/selectors'),
      'constants': path.join(__dirname, 'src/constants'),
      'containers': path.join(__dirname, 'src/containers'),
      'components': path.join(__dirname, 'src/components')
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, "src"),
        ],
      }
    ],
    loaders: [
      {
       test: /\.(css|scss)$/,
       loader: "style-loader!css-loader!sass-loader!postcss-loader",
       exclude: [/node_modules/, /public/]
     },
      {
        loaders: ['react-hot', 'babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      }
    ]
  }
}
