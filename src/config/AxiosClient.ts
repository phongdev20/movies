import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

export const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
export const DOMAIN_IMAGE = import.meta.env.VITE_DOMAIN_IMAGE;

const AxiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

AxiosClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    console.log("request", config);

    return config;
  }
);

// handle response to convert all api responses to camelCase
AxiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("response", response);

    return response;
  },
  (error: unknown) => {
    console.log("error", error);

    return error;
  }
);

export default AxiosClient;
