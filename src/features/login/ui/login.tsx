import React from 'react';
import {useTranslation} from 'react-i18next';
import {CustomModal} from '@/shared/ui/modals';
import {useKeyPress} from '@/shared/lib/hooks';
import {Username, Password, LoginButton} from '../model/login-fields.reflects';
import {validateFormEvent} from '../model/login.store';
import cls from './login.module.scss';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const Login = (props: LoginModalProps) => {
    const {isOpen, onClose} = props;
    const {t} = useTranslation();
    useKeyPress('Enter', () => {
        validateFormEvent();
    });

    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title={'login'}>
            <Username placeholder={`${t('user:fields.email')}`}/>
            <Password placeholder={`${t('user:fields.password')}`}/>
            <LoginButton className={cls.loginButton}>{t('common:navbar.sign_in')}</LoginButton>
        </CustomModal>
    );
};
