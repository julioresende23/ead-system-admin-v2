// src/api/services-api.ts
import type { RequestParams } from "@julioresende23/ead-api-client";
import { api } from "./apiClient";
import { ContentType } from "@julioresende23/ead-api-client";

export const ServicesApi = {
  gptUpdateJob(jobId: number, params: RequestParams = {}) {
    return api.api.servicesControllerServiceGptUpdateJobId(jobId, params);
  },
  gpt(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/services/gpt`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },
  gpts(params: RequestParams = {}) {
    return api.api.servicesControllerServicseGpt(params);
  },
  ocr(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/services/ocr`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },
  instagram(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/services/instagram`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },
};

export default ServicesApi;
