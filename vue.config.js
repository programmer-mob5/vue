const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        'presets': resolve(__dirname, 'src/presets'),
      },
    },
    devServer: {
      port: 8080,
    },
  },
});
