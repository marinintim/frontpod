module.exports = {
  exportPathMap: function () {
    const podcasts = require('./data.js').reduce((col, podcast) => {
      col[`/podcast/${podcast.slug}`] = { page: '/podcast', query: { slug: podcast.slug } }
      return col
    }, {});
    console.log(podcasts)
    return Object.assign({
      '/': { page: '/' },
    }, podcasts)
  }
}
