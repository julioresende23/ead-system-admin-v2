// src/api/logs-history-api.ts
import type {
  RequestParams,
  CreateLogsHistoryDto,
  UpdateLogsHistoryDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";
import { ContentType } from "@julioresende23/ead-api-client";

export const LogsHistoryApi = {
  create(data: CreateLogsHistoryDto, params: RequestParams = {}) {
    return api.api.logsHistoryControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.logsHistoryControllerFindAll(params);
  },
  siteLog(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/logs-history/save`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.logsHistoryControllerFindOne(id, params);
  },
  update(id: string, data: UpdateLogsHistoryDto, params: RequestParams = {}) {
    return api.api.logsHistoryControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.logsHistoryControllerRemove(id, params);
  },
};

export default LogsHistoryApi;
