require("@babel/register")
const path = require("path")

module.exports = {
  context: path.resolve(__dirname, "./src"),
  entry:   [path.resolve(__dirname, "src/index.js")],
  output:  {
    filename: "bundle.js",
    path:     path.resolve(__dirname, "dist")
  },
  target:  "web",
  // mode is new in webpack 4. Can be "production", "development" or "none"
  mode:    "development",
  // devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module:  {
    rules: [
      {
        test:    /\.jsx?$/,
        exclude: /(node_modules)/,
        use:     {
          loader:  "babel-loader",
          options: {
            "presets": [
              ["@babel/preset-env", {
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 10"]
                }
              }],
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  }
}

