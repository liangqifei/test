const path = require('path');
const webpack = require('webpack'); // 用于访问内置插件
const merge = require('webpack-merge')
const MinifyPlugin = require("babel-minify-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
function assetsPath(_path) {
  console.log(path.posix.join('static', _path))
  return path.posix.join('static', _path);
};
module.exports = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
    // assetsPublicPath:'/'
  },
  resolve: {
    // extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 1,
        name: assetsPath("img/[name].[hash:7].[ext]")
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: assetsPath("media/[name].[hash:7].[ext]")
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: assetsPath("fonts/[name].[hash:7].[ext]")
      }
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{ loader: 'babel-loader', options: { sourceMaps: true } }]

    },
    {
      test: /\.(css|scss|less|sass)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 2 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  // dev
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Output Management',
      minify: {
        removeComments: true,
        collapseWhitespace: true,//清理html中的空格、换行符。
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,//清理内容为空的元素。
        removeStyleLinkTypeAttributes: true,//去掉style和link标签的type属性。
        keepClosingSlash: true,
        minifyJS: true,//压缩html内的js。
        minifyCSS: true,//压缩html内的样式。
        minifyURLs: true,
      }
    }),
    // minifyOpts, pluginOpts
    new MinifyPlugin()
  ]
}