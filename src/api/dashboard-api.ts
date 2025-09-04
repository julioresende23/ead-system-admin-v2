// src/api/dashboard-api.ts
import type {
  RequestParams,
  CreateDashboardDto,
  UpdateDashboardDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const DashboardApi = {
  create(data: CreateDashboardDto, params: RequestParams = {}) {
    return api.api.dashboardControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.dashboardControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.dashboardControllerFindOne(id, params);
  },
  update(id: string, data: UpdateDashboardDto, params: RequestParams = {}) {
    return api.api.dashboardControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.dashboardControllerRemove(id, params);
  },
};

export default DashboardApi;
