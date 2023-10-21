import { PaymentsApi } from "../api";
import { AxiosResponse } from "axios";
import { WebApiService } from "./web-api-service";


export class PaymentsService extends WebApiService {

  paymentsApi: PaymentsApi;

  constructor() {
    super();
    this.paymentsApi = new PaymentsApi();
  }

  public async getUserDonations(): Promise<AxiosResponse<void, any>> {
    return await this.paymentsApi.paymentsControllerGetTotalAmountDonated(this.generateHeader());
  }

}

const paymentsService = new PaymentsService();
export default paymentsService;
