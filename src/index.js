const startServer = require('./startServer')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

startServer(typeDefs, resolvers)