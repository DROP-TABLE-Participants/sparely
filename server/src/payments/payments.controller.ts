import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post("donate")
  donate(@Body() paymentData: CreatePaymentDto): Promise<{ message: string, url?: string}> {
    return this.paymentsService.donate(paymentData);
  }
}
