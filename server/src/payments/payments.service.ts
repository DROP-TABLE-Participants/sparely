import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
	donate(): void {
		const paymentData = {
			mode: "payment",
			amount: 1063,
			campaignId: "4c1616b0-1284-4b7d-8b89-9098e7ded2c4",
			personId: "",
			firstName: "Anonymous",
			lastName: "Donor",
			isAnonymous: true,
			phone: null,
			successUrl: "https://podkrepi.bg/bg//campaigns/donation/church-dimitar-solunski-resen?success=true",
			cancelUrl: "https://podkrepi.bg/bg//campaigns/donation/church-dimitar-solunski-resen?success=false",
			message: ""
		};
	}
}
