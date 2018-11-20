module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/weather-app-v2/' : '/',
  css: {
    loaderOptions: {
      sass: {
        data: `@import 'src/assets/_variables.scss';`
      }
    }
  }
}