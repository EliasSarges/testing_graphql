const { fileLoader, mergeResolvers } = require('merge-graphql-schemas')
const path = require('path')

const typesArray = fileLoader(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const typeDefs = mergeResolvers(typesArray)
module.exports = typeDefs
