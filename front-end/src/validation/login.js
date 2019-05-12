import { authErrors } from '../utils/constants';

export const validateEmail = email => {
  const { validEmail, isRequiredEmail } = authErrors;
  const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  if (email.length !== 0) {
    if (email.length > 128 || !emailRegex.test(email)) {
      return validEmail;
    }
  } else {
    return isRequiredEmail;
  }
  return '';
};

export const validatePassword = password => {
  const { passwordLength, isRequiredPassword } = authErrors;
  if (password.length !== 0) {
    if (password.length < 8 || password.length > 255) {
      return passwordLength;
    }
  } else {
    return isRequiredPassword;
  }
  return '';
};
