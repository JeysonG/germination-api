import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { SpecieService } from './specie/specie.service';
import { SpecieResolver } from './specie/specie.resolver';
import { SpecieModule } from './specie/specie.module';
import { specieProviders } from './specie/specie.providers';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    SpecieModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /* User */
    UserService,
    UserResolver,
    ...userProviders,

    /* Specie */
    SpecieService,
    SpecieResolver,
    ...specieProviders,

    /* DB */
    ...databaseProviders,
  ],
})
export class AppModule {}
