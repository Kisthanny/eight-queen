const { defineConfig } = require("@vue/cli-service");
const mock = require("./mock/index");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error("webpack-dev-server is not defined");
      }

      mock(devServer.app);

      return middlewares;
    },
  },
});
