var config = {
   entry: './src/App.js',
	
   output: {
      path: __dirname,
      filename: 'app.js',
   },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;