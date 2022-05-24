const server = require('server');

server.get('Show', function (req, res, next) {
  const CatalogMgr = require('dw/catalog/CatalogMgr');
  const category = CatalogMgr.getCategory('category-1') 
  const products = category.getProducts()
  render('otherShow', { products: products })
  next()
})


module.exports = server.exports()