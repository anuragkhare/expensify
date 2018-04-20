const path = require("path");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: ".env.dev" });
}

module.exports = env => {
  const isProduction = env === "production";

  var plugins = [];
  if (isProduction) {
    plugins.push(
      /**
       * IgnorePlugin will skip any require
       * that matches the following regex.
       */
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new UglifyJsPlugin({ sourceMap: true })
    );
  }

  return {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.resolve(__dirname, "public"),
      publicPath: "/dist/",
      historyApiFallback: true,
      watchContentBase: true,
      overlay: true
    },
    plugins: [
      new ErrorOverlayPlugin(),
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        )
      })
    ],
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
