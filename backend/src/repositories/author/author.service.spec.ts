import { Test, TestingModule } from '@nestjs/testing';
import { AuthorRepository } from './author.service';

describe('AuthorRepository', () => {
  let service: AuthorRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthorRepository],
    }).compile();

    service = module.get<AuthorRepository>(AuthorRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
