var path = require("path");
 
module.exports = {
  entry: "./src/consolelog.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "consolelog.js",
    path: path.resolve(__dirname, "dist"),
  },
};