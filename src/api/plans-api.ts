// src/api/plans-api.ts
import type {
  RequestParams,
  CreatePlansDto,
  UpdatePlansDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const PlansApi = {
  create(data: CreatePlansDto, params: RequestParams = {}) {
    return api.api.plansControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.plansControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.plansControllerFindOne(id, params);
  },
  update(id: string, data: UpdatePlansDto, params: RequestParams = {}) {
    return api.api.plansControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.plansControllerRemove(id, params);
  },
};

export default PlansApi;
