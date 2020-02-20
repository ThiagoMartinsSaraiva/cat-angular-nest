import { Schema } from 'mongoose'

export const CatsSchema = new Schema({
  name: { type: String, unique: true },
  age: Number,
  color: String
})