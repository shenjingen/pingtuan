'use strict'

var path = require('path');
//var webpack = require("webpack");
//var vue = require("vue-loader");

var entry = ['./app/main'],
    cdnPrefix = "",
    buildPath = "./static/js/",
    publishPath = cdnPrefix + buildPath;

//编译输出路径
module.exports = {
    debug: true,
    entry: entry,
    output: {
        path: buildPath,
        filename: 'build.js',
        publicPath: publishPath
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        },{
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    }
};