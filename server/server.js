const path = require('path');
const Express = require('express');

const publicPath = path.join(__dirname, '..', 'public');
const port = proccess.env.PORT || 3000;
console.log(proccess.env.PORT );
// var app = Express();
//
// app.use(Express.static(publicPath));
//
// app.listen( port, () => {
//   console.log('server is up on this prot');
// }) ;
//
// console.log(__dirname+ '../public');
// console.log(publicPath);