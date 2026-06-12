require('dotenv').config()

const startServer = require('./server.cjs')

const PORT = process.env.PORT || 4000

startServer(PORT).catch((err) => {
  console.error('Failed to start server:', err)
  process.exit(1)
})
