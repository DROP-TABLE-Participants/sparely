import { Controller, Get, Param } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { Campaign } from './dto/campaign.dto';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @ApiResponse({ status: 200, description: 'List of campaigns' })
  @Get()
  async findAll(): Promise<Campaign[]> {
    return await this.campaignsService.findAll();
  }

  @ApiResponse({ status: 200, description: 'Campaign' })
  @ApiResponse({ status: 404, description: 'Campaign not found' })
  @Get(':slug')
  @ApiParam({
    name: 'slug',
    type: String,
    required: true,
    description: 'Id of the campaign',
  })
  async findOne(@Param() params: { slug: string }): Promise<Campaign> {
    return this.campaignsService.findOne(params.slug);
  }
}
