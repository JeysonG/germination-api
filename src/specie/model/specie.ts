import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class Specie extends Document {
  @Field(() => ID)
  _id: string;

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
