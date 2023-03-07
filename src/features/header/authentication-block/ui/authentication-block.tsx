import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { changeLoginModal, changeRegisterModal } from '@/entities/modals';
import cls from './authentication-block.module.scss';
import { Button } from '@/shared/ui/button';

interface AuthenticationBlockProps {
  className?: string;
}

export const AuthenticationBlock = (props: AuthenticationBlockProps) => {
  const { className } = props;
  const { t } = useTranslation('common');

  const handleOpenLogin = () => {
      changeLoginModal(true)
  };

  const handleOpenRegister = () => {
      changeRegisterModal(true)
  };

  return (
    <div className={clsx(cls.authenticationBlock, className)}>
      <Button onClick={handleOpenLogin} id='sign_in_button'>
        {t('common:navbar.sign_in')}
      </Button>
      <Button disabled={true} onClick={handleOpenRegister} id='sign_up_button'>
        {t('common:navbar.sign_up')}
      </Button>
    </div>
  );
};
