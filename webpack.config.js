const path = require("path");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.resolve(__dirname, "public"),
      historyApiFallback: true,
      watchContentBase: true,
      overlay: true
    },
    plugins: [new ErrorOverlayPlugin()],
    devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  };
};
