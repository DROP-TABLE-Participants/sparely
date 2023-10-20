import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreatePaymentDto {
	@IsNumber()
	@IsNotEmpty()
	amount: number;

	@IsString()
	@IsNotEmpty()
	campaignId: string;
}
