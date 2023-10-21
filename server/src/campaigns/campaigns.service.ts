import { Injectable } from '@nestjs/common';
import { Campaign } from "./dto/campaign.dto";

@Injectable()
export class CampaignsService {
  async findAll(): Promise<Campaign[]> {
    const request = await fetch("https://dev.podkrepi.bg/api/v1/campaign/list");

    const campaigns = await request.json() as Campaign[];

    return campaigns.map(campaign => {
      if (campaign.campaignFiles.length < 1) {
        campaign.logo = "https://dev.podkrepi.bg/podkrepi-icon.svg"
      } else {
        campaign.logo = campaign.campaignFiles.length > 0 ?
             "https://dev.podkrepi.bg/_next/image?url=https://dev.podkrepi.bg/api/v1/campaign-file/" +
              campaign.campaignFiles.find(campaignFile => {
                 return campaignFile.role === "campaignListPhoto";
              }).id + "&w=3840&q=75" :
            "https://dev.podkrepi.bg/podkrepi-icon.svg"
      }

      return campaign;
    })
  }

  async findOne(slug: string): Promise<Campaign> {
    const request = await fetch(`https://dev.podkrepi.bg/api/v1/campaign/${slug}`);

    return await request.json() as Campaign;
  }
}
