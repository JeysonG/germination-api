import { Test, TestingModule } from '@nestjs/testing';
import { SpecieResolver } from './specie.resolver';

describe('SpecieResolver', () => {
  let resolver: SpecieResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecieResolver],
    }).compile();

    resolver = module.get<SpecieResolver>(SpecieResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
