import { CreatePaymentDto, PaymentsApi } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service";
import storageService from "./storage-service";


export class PaymentsService extends WebApiService {

  paymentsApi: PaymentsApi;

  constructor() {
    super();
    this.paymentsApi = new PaymentsApi();
  }

  public async getUserDonations(): Promise<AxiosResponse<void, any>> {
    return await this.paymentsApi.paymentsControllerGetTotalAmountDonated(this.generateHeader());
  }

  public async makeDonation(amount: number, campaignId: string): Promise<AxiosResponse<void, any>> {
    return await this.paymentsApi.paymentsControllerDonate({amount, campaignId} as CreatePaymentDto, this.generateHeader());
  }

}

const paymentsService = new PaymentsService();
export default paymentsService;
