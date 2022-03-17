const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./main.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
    }),
  ],

  output: {
    filename: "[name].bundle.js",

    path: path.resolve(__dirname, "dist"),

    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "file-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
