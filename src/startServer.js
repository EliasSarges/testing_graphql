const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const startServer = (typeDefs, resolvers) => {
  mongoose.connect('mongodb+srv://elias:wBVmajtYj25krokx@cluster0.wlraw.mongodb.net/graphql?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const server = new ApolloServer({ typeDefs, resolvers })
  server.listen().then(({ url }) => console.log(`server running on ${url}`))
}

module.exports = startServer

