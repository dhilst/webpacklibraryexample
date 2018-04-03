const path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "helloworld.js",
        path: path.resolve(__dirname, "dist"),
        library: "helloworld",
        libraryTarget: "commonjs",
    },
    mode: process.env.NODE_ENV || "production",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}
