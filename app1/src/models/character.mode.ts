import { AxiosResponse } from "axios";

export interface Character {
    name: string;
    gender: string;
    status: string;
}

export interface UseApiCall<T> {
    call: Promise<AxiosResponse<T>>,
    controller: AbortController
}