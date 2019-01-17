module.exports = {
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port: 9080
  },

  chainWebpack: config => {
    config.module
      .rule('js')
      .exclude.add(/NIM_Web_.*\.js/).end()
  },

  publicPath: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: `@import "@/customize/eip-desktop-base/theme-eip-desktop.scss";`
      }
    }
  }
}
