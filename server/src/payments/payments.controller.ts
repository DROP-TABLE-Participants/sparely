import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiResponse({ status: 200, description: 'Payment URL' })
  @Post('donate')
  donate(
    @Body() paymentData: CreatePaymentDto,
  ): Promise<{ message: string; url?: string }> {
    return this.paymentsService.donate(paymentData);
  }
}
