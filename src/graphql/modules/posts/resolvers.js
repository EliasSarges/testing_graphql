const Post = require('../../../models/Post')
const User = require('../../../models/User')

module.exports = {
  Post: {
    author: (post) => User.findById(post.author)
  },

  Query: {
    posts: () => Post.find(),
    post: (_, { _id }) => Post.findById(_id)
  },

  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { _id, data }) => Post.findOneAndUpdate(_id, data, { new: true }),
    deletePost: async (_, { _id }) => !!(await Post.findByIdAndDelete(_id))
  }
}