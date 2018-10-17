const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, './src/js/index.jsx'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    ],
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                    }
                },
                
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                query: {
                  limit: 10000,
                  mimetype: 'application/font-woff'
                }
              },
              {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                query: {
                  limit: '10000',
                  mimetype: 'application/octet-stream'
                }
              },
              {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                query: {
                  limit: '10000',
                  mimetype: 'application/svg+xml'
                }
              },
              {
                test: /\.(png|jpg)$/,
                loader: 'file-loader',
                query: {
                  limit: 8192
                }
              },
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
          images: 'assets/images',
          api: 'js/api',
          components: 'js/components',
          config: 'js/config',
          lang: 'js/lang',
          layouts: 'js/layouts',
          pages: 'js/pages',
          utils: 'js/utils',
          ducks: 'js/ducks',
          data: 'js/data'
        },
        extensions: ['.js', '.jsx', '.css', '.scss', '.json', '.html', '.ico']
      },
    mode: 'development',
    plugins: [
　　 　　new HtmlWebpackPlugin({
　　　　    template: path.resolve(__dirname, './src/index.template.html'),
　　　　    inject: true
　　　　 }),
        new CopyWebpackPlugin([
            {from: 'src/data', to: 'data'},
            {from: 'src/assets', to: 'assets'},
        ])
　　 ]
}