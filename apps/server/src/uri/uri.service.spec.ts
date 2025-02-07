import { Test, TestingModule } from '@nestjs/testing';
import { UriService } from './uri.service';

describe('UriService', () => {
  let service: UriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UriService],
    }).compile();

    service = module.get<UriService>(UriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
