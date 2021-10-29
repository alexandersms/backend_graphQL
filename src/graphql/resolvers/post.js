export default {
  Query: {
    getAllPosts: async (_, {}, { Post }) => {
      let posts = await Post.find();
      return posts;
    },
  },
  Mutation: {
    createNewPost: async (_, { newPost }, { Post }) => {
      let result = await Post.create(newPost);
      return result;
    },
  },
};
