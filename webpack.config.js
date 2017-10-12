module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true
    }
}