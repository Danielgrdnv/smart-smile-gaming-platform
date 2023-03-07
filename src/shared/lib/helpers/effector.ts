import { combine, createEffect, createEvent, Effect, Event, restore, sample, Store } from 'effector';
import { toast } from 'react-toastify';
import { t } from 'i18next';
import { ApiError } from '../../api';
import type { ExtraValidateMessage, ValidateMessage } from './types';
import { validator } from './validator';

type OptionsField<T> = {
  defaultValue: T;
  reset?: Event<any>;
  withDebounce?: boolean;
  isErrorReset?: boolean;
};

export const debounceEvent = <Payload, Result>(
  event: Event<Payload>,
  defaultState: Payload,
  wait: number,
): [Store<Payload>, Event<Payload>] => {
  const debouncedEvent = createEvent<Payload>();
  let timeoutId: ReturnType<typeof setTimeout>;
  const $debounceStore = restore(debouncedEvent, defaultState);

  debouncedEvent.watch((payload) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => event(payload), wait);
  });

  return [$debounceStore, debouncedEvent];
};

export const createEffectorFieldWithError = <T>(
  options: OptionsField<T>,
): [Store<T>, Event<T>, Store<string>, Event<string>] => {
  const { defaultValue, reset, isErrorReset, withDebounce } = options;
  const changeEvent = createEvent<T>();
  const changeErrorEvent = createEvent<string>();
  const $store = restore(changeEvent, defaultValue);
  const $errorStore = restore<string>(changeErrorEvent, '');
  if (reset) $store.reset(reset);
  if (isErrorReset) {
    if (reset) {
      $errorStore.reset(changeEvent, reset);
    } else {
      $errorStore.reset(changeEvent);
    }
  }
  return [$store, changeEvent, $errorStore, changeErrorEvent];
};

type ValidateStore<T> = {
  $store: Store<T>;
  errorEvent: Event<string>;
  validate: ValidateMessage[];
  extraValidate?: ExtraValidateMessage[];
};

type ValidateFields<T> = {
  validateStores: ValidateStore<T>[];
  callback: () => void;
};

export const createValidateEvent = <T>(params: ValidateFields<T>) => {
  const { validateStores, callback } = params;
  const event = createEvent();

  const validateFormFx = createEffect((stores: T[]) => {
    const storeErrors = stores.map((store, index) => {
      const validateMessage = validateStores[index].validate;
      const conditions = validateStores[index].extraValidate?.map((condition) => ({
        message: condition.message,
        status: condition.status.getState(),
      }));
      return validator({ value: store as string, validArray: validateMessage, conditions });
    });

    validateStores.forEach((store, index) => {
      store.errorEvent(storeErrors[index]);
    });

    if (storeErrors.every((error) => error.length === 0)) {
      callback();
    }
  });

  sample({
    clock: event,
    source: combine(validateStores.map((item) => item.$store)),
    target: validateFormFx,
  });

  return event;
};

type EffectorErrorMiddlewareParams<T> = {
  effects: Effect<any, T, ApiError>[];
  errorHandler?: (error: ApiError) => void;
  successHandler?: (data?: T) => void;
};

export const createEffectApi = <Req = void, Res = unknown, Err = ApiError>(handler: (args: Req) => Promise<Res>) =>
  createEffect<Req, Res, Err>(handler);

export const effectorMiddleware = <T>(params: EffectorErrorMiddlewareParams<T>) => {
  const { effects, errorHandler, successHandler } = params;
  sample({
    clock: [...effects.map((effect) => effect.failData)],
    fn: (error) => {
      console.log(error)
      if (errorHandler) {
        errorHandler(error);
      } else {
        const { response } = error;
        if (response && response.data.code) {
          toast.error(t(`errors:code.${response.data.code}`));
        } else {
          toast.error(t(`errors:code.400`));
        }
      }
    },
  });

  if (successHandler) {
    effects.forEach((effect) =>
      sample({
        clock: effect.doneData,
        fn: (data) => {
          successHandler(data);
        },
      }),
    );
  }
};