// webpack.config.js
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
            loader: 'style!css',
            exclude: /node_modules/
         }
      ]
   },
   resolve: {
      // you can now require('file') instead of require('file.coffee')
      extensions: ['', '.js', '.json']
   }
};