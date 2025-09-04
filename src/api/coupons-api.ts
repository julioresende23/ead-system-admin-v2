// src/api/coupons-api.ts
import type {
  RequestParams,
  CreateCouponsDto,
  UpdateCouponsDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const CouponsApi = {
  create(data: CreateCouponsDto, params: RequestParams = {}) {
    return api.api.couponsControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.couponsControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.couponsControllerFindOne(id, params);
  },
  update(id: string, data: UpdateCouponsDto, params: RequestParams = {}) {
    return api.api.couponsControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.couponsControllerRemove(id, params);
  },
};

export default CouponsApi;
