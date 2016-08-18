const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

const build = (process.env.NODE_ENV === 'production');

module.exports = [{
    entry: {
        app: path.resolve(process.cwd(), 'src/app/index'),
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint-loader'],
            },
            {
                test: /\.scss$/,
                loader: "scss-lint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: build ? [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss?sourceMap=inline!sass')
            },
            {
                test: /\.js$/,
                loader: 'string-replace-loader',
                query: {
                    search: 'src/',
                    replace: 'build/'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                }
            },
        ] : [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                }
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'app.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [path.resolve(__dirname, 'src')]
    },
    eslint: {
        configFile: './.eslintrc',
    },
    postcss: function () {
        return build ? [
            autoprefixer,
            mqpacker,
            cssnano
        ] : [];
    },
    plugins: build ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false, // ...but do not show warnings in the console (there is a lot of them)
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new ExtractTextPlugin('../css/app.css', {
            allowChunks: true
        })
    ] : []
}];