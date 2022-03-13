import { Connection } from 'mongoose';
import { SpecieSchema } from './schema/specie.schema';

export const specieProviders = [
  {
    provide: 'SPECIE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Specie', SpecieSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];