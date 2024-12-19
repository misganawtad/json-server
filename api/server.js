const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add this middleware to handle CORS and other issues
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

server.use(router);

<<<<<<< HEAD
module.exports = server;
=======
module.exports = server;
>>>>>>> bcacb26ec6e7438e912e96e438a9cfb9e19627d1
