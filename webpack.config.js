const wepack = require('webpack');
const path = require('path');

module.exports = {
    entry: './block/app/app.js',

    output: {
        path: path.resolve(__dirname, './public/'),
        filename: 'app.js'
    },
    watch: true,
    devtool: "source-map",
    module: {

        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { presets: ['es2015'] },
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]

    }

};

// Дерево зависимостей
// app.js -> desc.js