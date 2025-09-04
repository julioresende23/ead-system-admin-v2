// src/api/companies-api.ts
import type {
  RequestParams,
  CreateCompaniesDto,
  UpdateCompaniesDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const CompaniesApi = {
  create(data: CreateCompaniesDto, params: RequestParams = {}) {
    return api.api.companiesControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.companiesControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.companiesControllerFindOne(id, params);
  },
  update(id: string, data: UpdateCompaniesDto, params: RequestParams = {}) {
    return api.api.companiesControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.companiesControllerRemove(id, params);
  },
};

export default CompaniesApi;
