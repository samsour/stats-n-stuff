module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
