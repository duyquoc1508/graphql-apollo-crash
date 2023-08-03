import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  name: String,
  age: Number
});

export const AuthorModel = mongoose.model('authors', AuthorSchema);
