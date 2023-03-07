import {combine, sample} from 'effector';

import {resetFields, submitForm} from './login.actions';
import {createEffectorFieldWithError, createValidateEvent} from "@/shared/lib/helpers";
import {validateExpression} from "@/shared/lib/constants";
import {IUserLoginReq, loginFx} from "@/entities/user";
import {changeLoginModal} from "@/entities/modals";

export const [$email, emailChanged, $emailError, emailErrorChanged] = createEffectorFieldWithError({
    defaultValue: '',
    reset: resetFields,
    isErrorReset: true,
});
export const [$password, passwordChanged, $passwordError, passwordErrorChanged] = createEffectorFieldWithError({
    defaultValue: '',
    reset: resetFields,
    isErrorReset: true,
});

export const $form = combine<IUserLoginReq>({email: $email, password: $password});
export const $errors = combine({emailError: $emailError, passwordError: $passwordError});

export const canSubmit = combine(
    $errors,
    loginFx.pending,
    (errors, sendFormPending) =>
        Object.values(errors).every((e) => e.length === 0) && !sendFormPending,
);

export const validateFormEvent = createValidateEvent({
    validateStores: [
        {
            validate: validateExpression.email,
            $store: $email,
            errorEvent: emailErrorChanged,
        },
        {
            validate: validateExpression.password,
            $store: $password,
            errorEvent: passwordErrorChanged,
        },
    ],
    callback: submitForm,
});

sample({
    source: $form,
    clock: submitForm,
    target: loginFx,
});

sample({
    clock: loginFx.doneData,
    fn: () => false,
    target: changeLoginModal,
});
