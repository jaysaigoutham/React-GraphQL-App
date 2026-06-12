const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { GraphQLError } = require('graphql')
const { randomUUID } = require('node:crypto')

const resolvers = require('./resolvers.cjs')
const typeDefs = require('./schema.cjs')

const startServer = (port) => {
  if (!typeDefs) {
    throw new Error('`typeDefs` is not defined — check ./schema export')
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  // return promise so callers can handle errors
  return startStandaloneServer(server, {
    listen: { port },
  }).then(({ url }) => {
    console.log(`Server ready at ${url}`)
    return url
  })
}

module.exports = startServer
