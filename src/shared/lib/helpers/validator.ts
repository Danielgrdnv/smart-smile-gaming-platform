import { t } from 'i18next';
import { ValidateMessage } from './types';

type ConditionMessage = {
  message: string;
  status: boolean;
};

type ValidatorFormProps = {
  value: string;
  validArray?: ValidateMessage[];
  conditions?: ConditionMessage[];
};

export const validator = (params: ValidatorFormProps): string => {
  const { value, validArray, conditions } = params;

  let errorText = '';
  if (validArray) {
    for (let i = 0; i < validArray.length; i += 1) {
      if (!new RegExp(validArray[i].regExp, 'g').test(value)) {
        errorText = t(validArray[i].message);
      }
    }
  }

  if (conditions) {
    for (let i = 0; i < conditions.length; i += 1) {
      if (conditions[i].status) {
        errorText = t(conditions[i].message);
      }
    }
  }

  return errorText;
};
