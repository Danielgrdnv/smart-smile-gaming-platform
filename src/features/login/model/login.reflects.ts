import { reflect } from '@effector/reflect';
import { changeLoginModal, $isLoginOpen } from '@/entities/modals';
import { Login } from '../ui/login';

export const LoginReflect = reflect({
  view: Login,
  bind: {
    isOpen: $isLoginOpen,
    onClose: () => changeLoginModal(false),
  },
});