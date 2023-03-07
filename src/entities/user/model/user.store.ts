import {createStore, sample} from 'effector';
import {useStore} from 'effector-react';
import {IUser} from './user.types';
import {getAuthMeFx, loginFx, logoutFx, registerFx, updateUserDataFx} from "./user.actions";

export const $user = createStore<IUser | null>(null)
    .on(loginFx.doneData, (state, payload) => payload)
    .on(getAuthMeFx.doneData, (state, payload) => payload)
    .on(updateUserDataFx.doneData, (state, payload) => ({...state, ...payload}))
    .on(registerFx.doneData, (state, payload) => payload)
    .reset(logoutFx.done);

sample({
    clock: registerFx.done,
    fn: ({params}) => ({
        email: params.email,
        password: params.password,
    }),
    target: loginFx,
});

export const useUserStore = () => useStore($user);
export const useIsAuth = () => useStore($user) !== null;
