import { Model, FilterQuery, UpdateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Specie } from './specie.schema';

@Injectable()
export class SpecieService {
  constructor(
    @Inject('SPECIE_MODEL')
    private specieModel: Model<Specie>,
  ) {}

  async create(input: UpdateQuery<Specie>): Promise<Specie> {
    return this.specieModel.create(input);
  }

  async findOne(query: FilterQuery<Specie>): Promise<Specie> {
    return this.specieModel.findOne(query).lean();
  }

  async find(): Promise<Specie[]> {
    return this.specieModel.find().lean();
  }
}
