import { restore } from 'effector';
import { changeLoginModal, changeRegisterModal } from './modals.actions';

export const $isLoginOpen = restore(changeLoginModal, false);
export const $isRegistrationOpen = restore(changeRegisterModal, false);
