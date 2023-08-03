import { authors, books } from '../data';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  // ngoài là type. cấp trong là field
  // QUERY
  Query: {
    // resolver cho type query
    books: async (_, __, context) => await context.dataSource.findAllBooks(),
    // tham số truyền từ query nằm trong args
    book: async (_, args, context) => await context.dataSource.getBookById(args.id),
    authors: async (_, __, { dataSource }) => await dataSource.findAllAuthors(),
    author: async (_, { id }, { dataSource }) => await dataSource.getAuthorById(id)
  },
  Book: {
    // resolver cho type book xem trong schema
    // vì props author trong type Book không có ngoặc => không có tham số args như ở query
    // parent như kết quả của query cha
    author: async (parent, _, context) => await context.dataSource.getAuthorById(parent.authorId)
  },
  Author: {
    // type là Author, field là books trong typeDefs -> sẽ vào resolver này
    books: async ({ id }, _, { dataSource }) => await dataSource.findAllBooks({ authorId: id })
  },

  // MUTATION
  Mutation: {
    createAuthor: async (_, args, context) =>
      await context.dataSource.createAuthor({
        name: args.name,
        age: args.age
      }),
    createBook: async (_, args, context) =>
      await context.dataSource.createBook({
        name: args.name,
        genre: args.genre,
        authorId: args.authorId
      })
  }
};
