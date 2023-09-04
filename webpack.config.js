const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: production ? '/course-js/' : '/',
    filename: production ? '[name].[contenthash].js' : '[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: !production ? 'inline-source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        include: /\.m\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.m\.css$/,
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify")
    },
    extensions: ['.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@components': path.resolve(__dirname, './src//components/'),
      '@images': path.resolve(__dirname, './src//assets/images/'),
      '@import': path.resolve(__dirname, './node_modules/'),
    },
  },
  plugins: [
    new Dotenv(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack & React',
      template: './src/index.html',
      favicon: './src/favicon.ico',
      minify: {
        collapseWhitespace: production,
      },
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  mode: production ? 'production' : 'development',
};
