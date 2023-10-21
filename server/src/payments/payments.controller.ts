import { Controller, Post, Body, UseGuards, Req, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { AuthGuard } from "../auth/google.strategy";
import { RequestWithAuth } from "../request";

@UseGuards(AuthGuard)
@ApiTags('Payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @ApiResponse({ status: 200, description: 'Payment URL' })
  @Post('donate')
  donate(
    @Body() paymentData: CreatePaymentDto,
    @Req() req: RequestWithAuth
  ): Promise<{ message: string; url?: string }> {
    const userId = req.headers['authorization'] .split(' ')[1] as string;

    return this.paymentsService.donate(paymentData, userId);
  }

  @ApiResponse({ status: 200, description: 'Payments by User' })
  @Post()
  async getTotalAmountDonated(
      @Req() req: Request
  ): Promise<{ amount:  number }> {
    const userId = req.headers['authorization'] .split(' ')[1] as string;

    console.log(userId);

    const amount = await this.paymentsService.getTotalAmountDonated(userId);

    return { amount };
  }
}
