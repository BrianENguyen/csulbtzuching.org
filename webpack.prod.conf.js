// import PurgeCSS webpack plugin and glob-all
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');
// Remove unused CSS using PurgeCSS. See https://github.com/FullHuman/purgecss
// for more information about PurgeCSS.
new PurgecssPlugin({
  paths: glob.sync([
    path.join(__dirname, './../src/index.html'),
    path.join(__dirname, './../**/*.vue'),
    path.join(__dirname, './../src/**/*.js'),
  ]),
});
