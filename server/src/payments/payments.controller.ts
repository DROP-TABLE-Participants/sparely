import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/google.strategy';

@UseGuards(AuthGuard)
@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiResponse({ status: 200, description: 'Payment URL' })
  @Post('donate')
  donate(
    @Body() paymentData: CreatePaymentDto,
    @Req() req,
  ): Promise<{ message: string; url?: string }> {
    const userId = req.userId;

    return this.paymentsService.donate(paymentData, userId);
  }

  @ApiResponse({ status: 200, description: 'Payments by User' })
  @Get()
  async getTotalAmountDonated(@Req() req): Promise<{ amount: number }> {
    const userId = req.userId;

    const amount = await this.paymentsService.getTotalAmountDonated(userId);

    return { amount };
  }
}
