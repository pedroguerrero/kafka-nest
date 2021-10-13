import { Test, TestingModule } from '@nestjs/testing';
import { Sample2Controller } from './sample2.controller';

describe('Sample2Controller', () => {
  let controller: Sample2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Sample2Controller],
    }).compile();

    controller = module.get<Sample2Controller>(Sample2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
