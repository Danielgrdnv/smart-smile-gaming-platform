import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

interface IErrorParam {
    msg: string;
    code: number;
    params: string;
    location: string;
}

export interface ApiErrorResponse {
    code: number;
    error: boolean;
    errors?: IErrorParam[];
    message: string;
}

export type ApiError<T = ApiErrorResponse> = AxiosError<T>;

export type ApiResponse<T = ApiResponseData> = AxiosResponse<T>;

export interface ApiResponseData<T = any> {
    data: T;
    message: string;
}

export type ApiRequestConfig<T = any> = InternalAxiosRequestConfig<T>;
