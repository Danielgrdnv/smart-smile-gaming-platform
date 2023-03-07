import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '@/entities/user';
import { Button } from '@/shared/ui/button';
import { ReactComponent as User } from '@/shared/assets/user-iron.svg';
import { ReactComponent as Arrow } from '@/shared/assets/arrow-icon.svg';
import cls from './user-block.module.scss';

interface UserBlockProps {
  className?: string;
}

export const UserBlock = (props: UserBlockProps) => {
  const { className } = props;

  const navigate = useNavigate();
  const { t } = useTranslation('user');
  const user = useUserStore();

  const handleProfile = () => {
    navigate('/bet-history');
  };

  const handleProfileMobile = () => {
    navigate('/profile');
  };

  return (
    <div className={clsx(cls.userBlock, className)}>
      <ul onClick={handleProfileMobile} className={cls.userInfoWrapper}>
        <li className={cls.userInfo}>
          <span>{t(`user:fields.id`)}</span>
          {`${user?.id}`}
        </li>
        <li className={cls.userInfo}>
          <span>{t(`user:fields.balance`)}</span>
          {/*{`${user?.balance} ${user?.currency}`}*/}
        </li>
      </ul>

      <Button className={cls.userBlockMenuButton} onClick={handleProfile} id='header_menu_button'>
        <User />
        <Arrow />
      </Button>
    </div>
  );
};
