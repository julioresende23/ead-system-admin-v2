// src/api/blog-api.ts
import type {
  RequestParams,
  CreateBlogDto,
  UpdateBlogDto,
} from "@julioresende23/ead-api-client";
import { api } from "./apiClient";

export const BlogApi = {
  create(data: CreateBlogDto, params: RequestParams = {}) {
    return api.api.blogControllerCreate(data, params);
  },
  list(params: RequestParams = {}) {
    return api.api.blogControllerFindAll(params);
  },
  slugs(params: RequestParams = {}) {
    return api.api.blogControllerBlogSlugsList(params);
  },
  posts(params: RequestParams = {}) {
    return api.api.blogControllerGetPosts(params);
  },
  getBySlug(slug: string, params: RequestParams = {}) {
    return api.api.blogControllerPostBySlug(slug, params);
  },
  get(id: string, params: RequestParams = {}) {
    return api.api.blogControllerFindOne(id, params);
  },
  update(id: string, data: UpdateBlogDto, params: RequestParams = {}) {
    return api.api.blogControllerUpdate(id, data, params);
  },
  remove(id: string, params: RequestParams = {}) {
    return api.api.blogControllerRemove(id, params);
  },
  active(id: string, params: RequestParams = {}) {
    return api.api.blogControllerActive(id, params);
  },
  approve(id: string, params: RequestParams = {}) {
    return api.api.blogControllerApprove(id, params);
  },
};

export default BlogApi;
