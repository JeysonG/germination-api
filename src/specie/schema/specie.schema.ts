import * as mongoose from 'mongoose';

export const SpecieSchema = new mongoose.Schema({
  name: String,
  commonName: String,
  image: String,
  family: String,
  status: String,
});
