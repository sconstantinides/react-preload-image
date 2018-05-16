module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactPreloadImage',
      externals: {
        react: 'React'
      }
    }
  }
}
