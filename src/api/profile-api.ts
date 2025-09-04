// src/api/profile-api.ts
import type {
  RequestParams,
  CreateProfilesDto,
  UpdateProfilesDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const ProfileApi = {
  create(data: CreateProfilesDto, params: RequestParams = {}) {
    return api.api.profileControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.profileControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.profileControllerFindOne(id, params);
  },
  update(id: string, data: UpdateProfilesDto, params: RequestParams = {}) {
    return api.api.profileControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.profileControllerRemove(id, params);
  },
};

export default ProfileApi;
