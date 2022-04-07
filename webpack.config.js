const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { mainModule } = require('process');

module.exports = {
  entry: path.join(__dirname, "src", "main.js"),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      title: 'Development',
      //template: 'index.html'
    }),
  ],
  devServer: {
    static: {
      publicPath: 'dist',
      directory: path.resolve(__dirname, 'dist'),
    },
    // compress: true,
    // port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
    historyApiFallback: true,
  },
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000
// }
}

//in the script for package.json(it doesnt allow comments)
// "dev": "webpack serve",
//     "build": "webpack",
    //plus the tests 

    // "start": "webpack --open --config webpack.dev.js",
    // "dev": "webpack-dev-server --mode development --open",
    // "build": "webpack --config webpack.prod.js",