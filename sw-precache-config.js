module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/200.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  navigateFallback: '200.html'
};