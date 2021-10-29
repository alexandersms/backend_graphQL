export default {
  Query: {
    getAllPosts: () => {
      return [
        {
          title: "Hello world",
          content: "This is simple content",
        },
        {
          title: "J'ai pris ma décision",
          content: "This is simple content",
        },
        {
          title:
            "Donner une chance à une personne qui t'a trahi c'est lui donner une 2ème balle pour te tuer",
          content: "This is simple content",
        },
      ];
    },
  },
  Mutation: {
    createNewPost: async (_, { newPost }, { Post }) => {
      let result = await Post.create(newPost);
      return result;
    },
  },
};
