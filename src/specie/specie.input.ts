import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSpecieInput {
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
