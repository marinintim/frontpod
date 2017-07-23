const podcasts = require('./data.module.js').podcasts.reduce((col, podcast) => {
  col[`/podcast/${podcast.slug}`] = { page: '/podcast', query: { slug: podcast.slug } }
  return col
}, {});
console.log('Подкасты: ', podcasts)

module.exports = {
  exportPathMap: function () {
   return Object.assign({
      '/': { page: '/' },
    }, podcasts)
  }
}
