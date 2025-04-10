import axios,{ AxiosInstance, InternalAxiosRequestConfig } from "axios";

export let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
    axiosInstance = axios.create({ baseURL });
}

const setupInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem("token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            console.log("Request Interceptor", config.url);
            return config;
        },
        (error) => {
            console.error("Request Interceptor Error", error);
            return Promise.reject(error);
        }   
    );

    axiosInstance.interceptors.response.use(
        (response) => {
            console.log("Response Interceptor", response.data);
            return response;
        },
        (error) => {
            console.error("Response Interceptor Error", error);
            return Promise.reject(error);
        }
    );
}

export const initAxios = (baseURL: string) => {
    createAxios(baseURL);
    setupInterceptors();
    return axiosInstance;
}