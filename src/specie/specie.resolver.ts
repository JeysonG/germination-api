import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateSpecieInput, UpdateSpecieInput } from './dto/specie.input';
import { SpecieService } from '../specie/specie.service';
import { Specie } from './model/specie';
import { Schema as MongooseSchema } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';

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
  async updateSpecie(@Args('payload') payload: UpdateSpecieInput) {
    return this.service.update(payload);
  }

  @Mutation(() => Specie)
  async deleteSpecie(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.service.delete(_id);
  }

  @Mutation(() => Specie)
  @UseInterceptors(FileInterceptor('file'))
  async upload(@Args('file', { type: () => String }) @UploadedFile() file) {
    console.log(file);
  }
}
