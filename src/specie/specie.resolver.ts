import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateSpecieInput } from './dto/specie.input';
import { SpecieService } from '../specie/specie.service';
import { Specie } from './model/specie';
import { Schema as MongooseSchema } from 'mongoose';

@Resolver(() => Specie)
export class SpecieResolver {
  constructor(private service: SpecieService) {}

  @Mutation(() => Specie)
  async createSpecie(@Args('input') input: CreateSpecieInput) {
    return this.service.create(input);
  }

  @Query(() => [Specie])
  async species() {
    return this.service.find();
  }

  @Query(() => Specie)
  async specie(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.service.getById(_id);
  }

  @Mutation(() => Specie)
  async deleteSpecie(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.service.delete(_id);
  }
}
