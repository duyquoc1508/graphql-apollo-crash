import { authors, books } from '../data';
const AuthorModel = require('../models/Author.js');
import { BookModel } from '../models/Book.js';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  // ngoài là type. cấp trong là field
  // QUERY
  Query: {
    // resolver cho type query
    books: () => books,
    // tham số truyền từ query nằm trong args
    book: (_, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (_, args) => authors.find((item) => item.id == args.id)
  },
  Book: {
    // resolver cho type book xem trong schema
    // vì props author trong type Book không có ngoặc => không có tham số args như ở query
    // parent như kết quả của query cha
    author: (parent) => authors.find((author) => author.id == parent.authorId)
  },
  Author: {
    // type là Author, field là books trong typeDefs -> sẽ vào resolver này
    books: (parent) => books.filter((book) => book.authorId == parent.id)
  },

  // MUTATION
  Mutation: {
    createAuthor: (parent, args) => {
      console.log(AuthorModel)
      AuthorModel.create({
        name: args.name,
        age: args.arg
      })
    },
    createBook: (parent, args) => args
  }
};
