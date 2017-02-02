const path = require('path');

const Webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;

const config = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.coffee']
    },
    devtool: NODE_ENV === 'production' ? '' : 'source-pam'
};

module.exports = config;