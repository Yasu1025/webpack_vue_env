const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const AutoPrefixer = require("autoprefixer");



module.exports = (env, argv) => {

    const isDevMode = argv.mode === 'development';
    const enabledSourceMap = isDevMode;
    const distPath = isDevMode ? 'dist' : 'release';

    return {

        entry: './src/main.js',
        output: {
            filename: './assets/js/bundle.js',
            path: path.resolve(__dirname, distPath)
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: './public' }
            ]),
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: './assets/css/bundle.css'
            })
        ],
        optimization: {
            minimizer: [
                new OptimizeCSSAssetsPlugin()
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            open: true,
            port: 3000
        },
        module: {
            rules: [
                {
                    test:  /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(sc|sa|c)ss/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                sourceMap: enabledSourceMap,
                                importLoaders: 2
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: enabledSourceMap,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: enabledSourceMap,
                                plugins: [
                                    AutoPrefixer(
                                        {
                                            grid: true
                                        },
                                    ),
                                ],
                            },
                        }
                    ]
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
            // When you import .js or .vue files, you don't have to write extensions. e.g.) sample.js -> sample
            extensions: ['.js', '.vue'],
            alias: {
                vue$: `vue/dist/vue.esm.js`
            }
        },
        devtool: 'inline-source-map'

    }
    
}
