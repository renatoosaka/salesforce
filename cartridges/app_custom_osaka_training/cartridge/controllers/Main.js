const server = require('server');

server.get('Show', function (req, res, next) {
  const productMgr = require('dw/catalog/ProductMgr');
  const product = productMgr.getProduct('product-1');
  render('show', { product: product })
  next()
})

server.get('Basket', function(req, res, next) {
  const basketMgr = require('dw/order/BasketMgr');
  const basket = basketMgr.getCurrentBasket();
  const products = basket.getAllProductLineItems();
  render('basket', { products: products })
  next()
})

module.exports = server.exports()