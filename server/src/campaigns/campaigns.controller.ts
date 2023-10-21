import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from "./dto/campaign.dto";

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Get()
  async findAll(): Promise<Campaign[]> {
    return await this.campaignsService.findAll();
  }

  @Get(":slug")
  async findOne(@Param() params: { slug: string }): Promise<Campaign> {
    return this.campaignsService.findOne(params.slug);
  }
}
