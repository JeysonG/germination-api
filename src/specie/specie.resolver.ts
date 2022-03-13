import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateSpecieInput } from './dto/specie.input';
import { SpecieService } from '../specie/specie.service';
import { Specie } from './model/specie';

@Resolver(() => Specie)
export class SpecieResolver {
  constructor(private specieService: SpecieService) {}

  @Mutation(() => Specie)
  async createSpecie(@Args('input') input: CreateSpecieInput) {
    return this.specieService.create(input);
  }

  @Query(() => [Specie])
  async species() {
    return this.specieService.find();
  }
}
