// src/api/app-api.ts
import type { RequestParams } from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const AppApi = {
  start(params: RequestParams = {}) {
    return api.api.appControllerStart(params);
  },
  sendEmail(params: RequestParams = {}) {
    return api.api.appControllerGetTest(params);
  },
};

export default AppApi;
