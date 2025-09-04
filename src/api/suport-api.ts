// src/api/suport-api.ts
import type {
  RequestParams,
  CreateSuportDto,
  UpdateSuportDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const SuportApi = {
  create(data: CreateSuportDto, params: RequestParams = {}) {
    return api.api.suportControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.suportControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.suportControllerFindOne(id, params);
  },
  update(id: string, data: UpdateSuportDto, params: RequestParams = {}) {
    return api.api.suportControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.suportControllerRemove(id, params);
  },
};

export default SuportApi;
