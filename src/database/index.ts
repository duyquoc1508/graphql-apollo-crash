// tất cả các code tương tác với db nên được viết ở đây và truyền vào cho graphql dưới dạng tham số thứ 3 trong lúc create apollo server (context)
// không nên gọi trực tiếp hàm trong resolver

import { BookModel } from "../models/Book"
import { AuthorModel } from "../models/Author"

export const databaseMethods = {
  createBook: async args => await BookModel.create(args),
  findAllBooks: async (condition = {}) => await BookModel.find(condition),
  getBookById: async (id) => await BookModel.findById(id),

  createAuthor: async args => await AuthorModel.create(args),
  findAllAuthors: async () => await AuthorModel.find({}),
  getAuthorById: async (id) => await AuthorModel.findById(id)
}
