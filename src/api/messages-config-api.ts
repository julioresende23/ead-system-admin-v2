// src/api/messages-config-api.ts
import type {
  RequestParams,
  CreateMessagesConfigDto,
  UpdateMessagesConfigDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const MessagesConfigApi = {
  create(data: CreateMessagesConfigDto, params: RequestParams = {}) {
    return api.api.messagesConfigControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.messagesConfigControllerFindAll(params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.messagesConfigControllerFindOne(id, params);
  },
  update(id: string, data: UpdateMessagesConfigDto, params: RequestParams = {}) {
    return api.api.messagesConfigControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.messagesConfigControllerRemove(id, params);
  },
};

export default MessagesConfigApi;
