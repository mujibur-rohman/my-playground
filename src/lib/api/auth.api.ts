import { LoginModel } from "@/models/auth";
import { fetcher } from "./config";
import { LoginResponse } from "../types";

const apiEndpoint: string = "/auth";

const API_AUTH = {
  login: async (payload: LoginModel) => {
    try {
      const res = await fetcher.post<LoginResponse>(apiEndpoint, payload);
      return res.data;
    } catch (error: any) {
      if (error.response.data) {
        throw new Error(error.response.data.errors);
      }
      throw new Error(error.message);
    }
  },
};

export { API_AUTH };
