const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule("svg");

  //   svgRule.uses.clear();

  //   svgRule
  //     .use("babel-loader")
  //     .loader("babel-loader")
  //     .end()
  //     .use("vue-svg-loader")
  //     .loader("vue-svg-loader");
  // },
  pwa: {
    name: "Joblyn Portfolio",
    themeColor: "#20bf55",
    msTileColor: "#091619",
    icons: {
      faviconVG: "img/icons/favicon.svg",
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/favicon-152x152.png",
      maskIcon: "img/icons/favicon.svg",
      msTileImage: "img/icons/favicon-144x144.png",
    },
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    workboxPluginMode: "GenerateSW",
  },
});
