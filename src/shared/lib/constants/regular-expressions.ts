export const regularExpression = {
  isEmpty: /.+$/,
  isEmail: /([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+/,
  isPassword: /^[\w\d]{6,180}$/,
};