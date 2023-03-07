import { Store } from 'effector';

export type ValidateMessage = {
  message: string;
  regExp: RegExp | string;
};

export type ExtraValidateMessage = {
  message: string;
  status: Store<boolean>;
};
