import {AxiosPromise} from 'axios';
import {api} from '@/shared/api';
import {IUser} from '../model/user.types';
import {IPasswordUpdateRes, IUpdatePasswordReq, IUpdateUserDataReq, IUserLoginReq, IUserRegisterReq} from "./user.dto";

export const loginApi = (params: IUserLoginReq): AxiosPromise<IUser> => api.post('/login', params);

export const logoutApi = (): AxiosPromise<string> => api.delete('/logout');

export const registerApi = (params: IUserRegisterReq): AxiosPromise<IUser> => api.post('/register', params);

export const authMeApi = (): AxiosPromise<IUser> => api.get('/me/auth');

export const updatePasswordApi = (params: IUpdatePasswordReq): AxiosPromise<IPasswordUpdateRes> =>
    api.put('/me/password', params);

export const updateUserDataApi = (params: IUpdateUserDataReq): AxiosPromise<any> => api.patch('/me/update-data', params);


