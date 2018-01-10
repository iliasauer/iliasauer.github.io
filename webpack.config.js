const path = require("path");

module.exports = [
    {
        entry: {
            app: ["./lib/main.js"]
        },
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "bundle.js",
            publicPath: "/assets/"
        },
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: [/(node_modules|bower_components)/],
                    loader: "babel-loader"
                },
                {
                    test: /\.json$/,
                    loader: "json-loader"
                },
                {
                    test: /\.css$/,
                    loader: "style-loader!css-loader"
                }
            ]
        },
    }
];
