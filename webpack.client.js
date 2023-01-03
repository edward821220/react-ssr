const path = require("path");

module.exports = {
  target: "web",
  entry: "./src/client.js",
  output: {
    filename: "bundle-client.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
