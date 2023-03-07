import {IUserRegisterReq} from "../api/user.dto";

type IOmitUserParams = 'password' | 'confirmPassword' | 'isTermsAccepted'

export type IUser = Omit<Required<IUserRegisterReq>, IOmitUserParams> & { id: number }