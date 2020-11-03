// https://webpack.js.org/configuration/

// Node path
const path = require("path");

// entry point -> output
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  // Sourcemap. This shows the exact location/component for errors. Else it will just show error location: bundle.js
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
