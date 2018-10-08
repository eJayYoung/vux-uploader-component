var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    'build': './demo/main.js'
  },
  output: {
    path: path.resolve(__dirname, './demo'),
    publicPath: '/demo/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';

  module.exports.entry = {
    'uploader': './src/index.js',
  };
  module.exports.output = {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'vux-uploader-component',
    libraryTarget: 'umd',
  };

  module.exports.resolve = {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  };

  module.exports.externals = {
    'vue': 'Vue',
  };
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
