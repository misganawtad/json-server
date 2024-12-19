const jsonServer = require('json-server')
const path = require('path')

// Create JSON Server instance
const server = jsonServer.create()

// Load db.json
const dbPath = path.join(__dirname, '..', 'db.json')
const db = require(dbPath)

// Create router using db.json
const router = jsonServer.router(db)

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

// Use router
server.use(router)

module.exports = server
