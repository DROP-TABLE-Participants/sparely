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
    return this.paymentsService.donate(paymentData, req.user);
  }

  @ApiResponse({ status: 200, description: 'Payments by User' })
  @Post(':userId')
  @ApiParam({
    name: 'userId',
    type: String, 
    required: true,
    description: 'Id of the user',
  })
  async getTotalAmountDonated(
      @Param() params: { userId: string }
  ): Promise<{ amount:  number }> {
    const amount = await this.paymentsService.getTotalAmountDonated(params.userId);

    return { amount };
  }
}
