type IGender = "Mr" | 'Mrs'

//LOGIN
export interface IUserLoginReq {
    email: string;
    password: string;
};

//REGISTER
export interface IUserRegisterPersonalInfo {
    name: string;
    surname: string;
    birthday: number;
    gender: IGender;
}

export interface IUserRegisterLocationInfo {
    country: string;
    city: string;
    educationInstitution: string;
    grade: string;
}

export interface IUserRegisterAccountInfo {
    email: string;
    password: string;
    confirmPassword: string;
    isTermsAccepted: boolean;
}

export interface IUserRegisterReq extends IUserRegisterPersonalInfo,
    IUserRegisterLocationInfo,
    IUserRegisterAccountInfo {
};

//UPDATE INFO, Email is readonly, passwords and checkbox are not needed
type IOmitRegisterParams = 'email' | 'password' | 'confirmPassword' | 'isTermsAccepted';
export type IUpdateUserDataReq = Omit<Partial<IUserRegisterReq>, IOmitRegisterParams>

//PASSWORDS
export interface IUpdatePasswordReq {
    oldPassword: string;
    newPassword: string;
    repeatPassword: string;
};

export interface IPasswordRecoveryReq {
    newPassword: string;
    sessionId: string;
};

export interface IPasswordUpdateRes {
    message: string
}