module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{html,scss,ts,css,jpg,svg,js,ico,json}'],
  maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
  swDest: 'dist/service-worker.js',
  navigateFallback: '/index.html'
};
