import { reflect } from '@effector/reflect';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/inputs';
import {$errors, $form, canSubmit, emailChanged, passwordChanged, validateFormEvent} from './login.store';

export const Username = reflect({
  view: Input,
  bind: {
    id: 'login_email_input',
    required: true,
    value: $form.map((form) => form.email),
    onChange: (e) => emailChanged(e.target.value),
    error: $errors.map((form) => form.emailError),

  },
});

export const Password = reflect({
  view: Input,
  bind: {
    id: 'login_password_input',
    type: 'password',
    required: true,
    value: $form.map((form) => form.password),
    onChange: (e) => passwordChanged(e.target.value),
    error: $errors.map((form) => form.passwordError),

  },
});

export const LoginButton = reflect({
  view: Button,
  bind: {
    id: 'login_button',
    variant: 'filled',
    disabled: canSubmit.map((c) => !c),
    onClick: () => {
      validateFormEvent();
    },
  },
});
