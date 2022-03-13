import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const SpecieSchema = new mongoose.Schema({
  name: String,
  commonName: String,
  image: String,
  family: String,
  status: String,
});

@ObjectType()
export class Specie extends Document {
  @Field()
  name: string;

  @Field()
  commonName: string;

  @Field()
  image: string;

  @Field()
  family: string;

  @Field()
  status: string;
}
