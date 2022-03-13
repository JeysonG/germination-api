import { Module } from '@nestjs/common';
import { SpecieResolver } from './specie.resolver';
import { SpecieService } from './specie.service';
import { DatabaseModule } from '../database/database.module';
import { specieProviders } from './specie.providers';

@Module({
  imports: [DatabaseModule],
  providers: [SpecieResolver, SpecieService, ...specieProviders],
})
export class SpecieModule {}
