// src/api/payments-api.ts
import type {
  RequestParams,
  CreatePaymentDto,
  UpdatePaymentDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const PaymentsApi = {
  create(data: CreatePaymentDto, params: RequestParams = {}) {
    return api.api.paymentsControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.paymentsControllerFindAll(params);
  },
  getCreditsByUser(params: RequestParams = {}) {
    return api.api.paymentsControllerGetCreditsByUser(params);
  },
  listByUser(params: RequestParams = {}) {
    return api.api.paymentsControllerFindAllByUser(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.paymentsControllerFindOne(id, params);
  },
  update(id: string, data: UpdatePaymentDto, params: RequestParams = {}) {
    return api.api.paymentsControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.paymentsControllerRemove(id, params);
  },
};

export default PaymentsApi;
