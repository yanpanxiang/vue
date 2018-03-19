const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyESPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/main/resources/public/index.js'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './src/main/resources/public'),
        filename: 'js/[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src/main/resources/public'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src/main/resources/public'), resolve('test')]
            },
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1
            }
        }),
        new ExtractTextPlugin({filename: 'css/styles.[contenthash:8].css', allChunks: true}),
        new UglifyESPlugin({
            uglifyOptions: {
                // 最紧凑的输出
                beautify: false,
                // 删除所有的注释
                comments: false,
                compress:
                    {
                        // 在UglifyJs删除没有用到的代码时不输出警告
                        warnings: false,
                        // 删除所有的 `console` 语句
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true
                    }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Demo',
            filename: '../templates/index.html',
            template: 'src/main/resources/templates/demo.template',
            inject: false,
            files: {
                js: ['app', 'vendor'],
                css: ['styles']
            },
            minify: false
        })
    ]
}
