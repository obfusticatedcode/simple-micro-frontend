const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    // decide which files to share
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:8081/remoteEntry.js",
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    // adds automatic script tags to html file
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};

// ModuleFederationPlugin, name isn't used as this is only used for remotes not hosts like container is.
