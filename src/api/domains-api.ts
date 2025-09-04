// src/api/domains-api.ts
import type {
  RequestParams,
  CreateDomainsDto,
  UpdateDomainsDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const DomainsApi = {
  create(data: CreateDomainsDto, params: RequestParams = {}) {
    return api.api.domainsControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.domainsControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.domainsControllerFindOne(id, params);
  },
  update(id: string, data: UpdateDomainsDto, params: RequestParams = {}) {
    return api.api.domainsControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.domainsControllerRemove(id, params);
  },
};

export default DomainsApi;
