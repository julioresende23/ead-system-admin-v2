// src/api/user-api.ts
import type { RequestParams } from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const UserApi = {
  create(params: RequestParams = {}) {
    return api.api.userControllerCreate(params);
  },
  list(params: RequestParams = {}) {
    return api.api.userControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.userControllerFindOne(id, params);
  },
  update(id: string, params: RequestParams = {}) {
    return api.api.userControllerUpdate(id, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.userControllerRemove(id, params);
  },
  updateAdmin(id: number, params: RequestParams = {}) {
    return api.api.userControllerUpdateAdmin(id, params);
  },
};

export default UserApi;
