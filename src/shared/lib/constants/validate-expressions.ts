import {regularExpression as regExp} from './regular-expressions';

export const validateExpression = {
    withoutValidation: [],
    empty: [{regExp: regExp.isEmpty, message: 'errors:error.field_is_empty'}],
    email: [
        {regExp: regExp.isEmpty, message: 'errors:error.field_is_empty'},
        {regExp: regExp.isEmail, message: 'errors:error.incorrect_email'},
    ],
    password: [
        {regExp: regExp.isEmpty, message: 'errors:error.field_is_empty'},
        {regExp: regExp.isPassword, message: 'errors:error.incorrect_password'},
    ],
};
