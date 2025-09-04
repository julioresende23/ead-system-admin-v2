// src/api/auth-api.ts
import type { RequestParams } from "@julioresende23/ead-api-client";
import { api } from "./apiClient";
import { ContentType } from "@julioresende23/ead-api-client";

export const AuthApi = {
  // POST /api/auth/signin  (ex: { email, password })
  signin(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/auth/signin`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },

  // POST /api/auth/signin/loginApi
  signinApi(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/auth/signin/loginApi`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },

  // POST /api/auth/signup
  signup(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/auth/signup`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },

  // POST /api/auth/recover/password
  recoverPassword(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/auth/recover/password`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },

  // POST /api/auth/token/validate
  validateToken(body: unknown, params: RequestParams = {}) {
    return api.request({
      path: `/api/auth/token/validate`,
      method: "POST",
      type: ContentType.Json,
      body,
      ...params,
    });
  },

  // GET /api/auth/token/validate/user/{role}
  getProfileByRole(role: string, params: RequestParams = {}) {
    return api.api.authControllerGetProfileData(role, params);
  },

  // DELETE /api/auth/delete/user/{id}
  deleteUser(id: string, params: RequestParams = {}) {
    return api.api.authControllerDeleteUser(id, params);
  },

  // Social logins (GET)
  googleAuth(params: RequestParams = {}) {
    return api.api.authControllerGoogleAuth(params);
  },
  googleCallback(params: RequestParams = {}) {
    return api.api.authControllerGoogleCallBack(params);
  },
  facebookAuth(params: RequestParams = {}) {
    return api.api.authControllerFacebookLogin(params);
  },
  facebookCallback(params: RequestParams = {}) {
    return api.api.authControllerFacebookLoginCallback(params);
  },
};

export default AuthApi;
