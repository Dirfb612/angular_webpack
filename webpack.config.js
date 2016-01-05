// webpack.config.js
//const webpack = require('webpack');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const extractCSS = new ExtractTextPlugin('[name].css');

module.exports = {
   entry: './app.js',
   output: {
      filename: 'bundle.js'
   },
   module: {
      loaders: [

         {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.css$/,
            loader: "css-loader",
            exclude: /node_modules/
         },
     /*    {
            test: /\.css$/,
            loader: "css-loader!autoprefixer-loader"
         },*/
      /*   {
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
         },*/
         {
            test: /\.styl$/,
            loader: 'style!css!stylus',
            exclude: /node_modules/
         }
         //{
         //   test: /\.styl$/,
         //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
         //}

      ]
   },
   resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json']
   },

   //plugins: [extractCSS]
};