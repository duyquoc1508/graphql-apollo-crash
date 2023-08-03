import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

export const BookModel = mongoose.model('books', BookSchema);
