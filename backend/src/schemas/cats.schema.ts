import { Schema } from 'mongoose'

export const CatsSchema = new Schema({
  name: String,
  age: Number,
  color: String
})