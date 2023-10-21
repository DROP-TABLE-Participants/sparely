import { Test, TestingModule } from '@nestjs/testing';
import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';

describe('CampaignsController', () => {
  let controller: CampaignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignsController],
      providers: [CampaignsService],
    }).compile();

    controller = module.get<CampaignsController>(CampaignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
