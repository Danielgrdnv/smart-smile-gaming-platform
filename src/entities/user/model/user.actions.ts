import {toast} from 'react-toastify';
import {IUser} from './user.types';
import {createEffectApi, effectorMiddleware} from "@/shared/lib/helpers";
import {
    IUserLoginReq,
    IUserRegisterReq,
    IUpdateUserDataReq,
    IUpdatePasswordReq, IPasswordUpdateRes
} from "../api/user.dto";
import {authMeApi, loginApi, logoutApi, registerApi, updatePasswordApi, updateUserDataApi} from "../api/user.api";

export const loginFx = createEffectApi(async (params: IUserLoginReq) => {
    const response = await loginApi(params);
    return response.data;
});

export const registerFx = createEffectApi(async (params: IUserRegisterReq) => {
    const response = await registerApi(params);
    return response.data;
});

export const logoutFx = createEffectApi(async () => {
    const response = await logoutApi();
    return response.data;
});

export const getAuthMeFx = createEffectApi(async () => {
    const response = await authMeApi();
    return response.data;
});

export const updatePasswordFx = createEffectApi(async (params: IUpdatePasswordReq) => {
    const response = await updatePasswordApi(params);
    return response.data;
});

export const updateUserDataFx = createEffectApi(async (params: IUpdateUserDataReq) => {
    const response = await updateUserDataApi(params);
    return response.data;
});

effectorMiddleware<IUser>({
    effects: [loginFx, registerFx, updateUserDataFx],
});

effectorMiddleware<IPasswordUpdateRes>({
    effects: [updatePasswordFx],
    successHandler: (pld) => {
        toast.success(pld?.message ?? 'success');
    },
});
