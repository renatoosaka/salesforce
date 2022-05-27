const server = require('server');

server.get('Show', function (req, res, next) {
  const CatalogMgr = require('dw/catalog/CatalogMgr');
  const category = CatalogMgr.getCategory('womens-jewelry-earrings') 
  const products = category.getProducts()
  res.render('otherShow', { products: products })
  next()
})


module.exports = server.exports()