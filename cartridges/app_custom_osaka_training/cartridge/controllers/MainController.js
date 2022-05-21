const server = require('server');

server.get('Show', function (req, res, next) {
  const productMgr = require('dw/catalog/ProductMgr');
  const product = productMgr.getProduct('product-1');

  render('show', { product: product })
  next()
})

module.exports = server.exports()