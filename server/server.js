const path = require('path');
const Express = require('express');

const publicPath = path.join(__dirname, '..', 'public');
const port = procces.env.PORT || 3000;
var app = Express();

app.use(Express.static(publicPath));

app.listen( port, () => {
  console.log('server is up on this prot');
}) ;

console.log(__dirname+ '../public');
console.log(publicPath);