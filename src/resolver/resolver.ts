import { authors, books } from '../data';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: { // resolver cho type query
    books: () => books,
    // tham số truyền từ query nằm trong args
    book: (_, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (_, args) => authors.find((item) => item.id == args.id)
  },
  Book: { // resolver cho type book xem trong schema
    // vì props author trong type Book không có ngoặc => không có tham số args như ở query
    // parent như kết quả của query cha
    author: (parent) => authors.find(author => author.id === parent.authorId)
  }
};
