const server = require('server');

server.get('Show', function (req, res, next) {
  render('show')
  next()
})

module.exports = server.exports()