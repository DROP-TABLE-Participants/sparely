import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  async donate(
    paymentData: CreatePaymentDto,
  ): Promise<{ message: string; url?: string }> {
    const donationData = {
      mode: 'payment',
      amount: paymentData.amount,
      campaignId: paymentData.campaignId,
      personId: '',
      firstName: 'Anonymous',
      lastName: 'Donor',
      isAnonymous: true,
      phone: null,
      successUrl:
        'https://podkrepi.bg/bg//campaigns/donation/church-dimitar-solunski-resen?success=true',
      cancelUrl:
        'https://podkrepi.bg/bg//campaigns/donation/church-dimitar-solunski-resen?success=false',
      message: '',
    };

    console.log(JSON.stringify(donationData));

    const response = await fetch(
      'https://dev.podkrepi.bg/api/v1/donation/create-checkout-session',
      {
        method: 'POST',
        body: JSON.stringify(donationData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const {
      session: { url },
    } = await response.json();

    return {
      message: 'success',
      url: url,
    };
  }
}
