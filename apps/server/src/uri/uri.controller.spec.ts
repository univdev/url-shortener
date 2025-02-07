import { Test, TestingModule } from '@nestjs/testing';
import { UriController } from './uri.controller';

describe('UriController', () => {
  let controller: UriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UriController],
    }).compile();

    controller = module.get<UriController>(UriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
