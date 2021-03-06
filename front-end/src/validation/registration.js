import errorMessages from '../utils/constants/registrationErrors';

function hasNumber(myString) {
  return /\d/.test(myString);
}

export const nameValidation = name => {
  if (name.length !== 0) {
    if (name.length > 30) {
      return errorMessages.nameErrorLong;
    }
    if (hasNumber(name)) {
      return errorMessages.nameError;
    }
  } else {
    return errorMessages.isEmptyName;
  }
  return '';
};

export const emailValidation = email => {
  if (email.length !== 0) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.length > 128) {
      return errorMessages.emailError;
    }
  } else {
    return errorMessages.isEmptyEmail;
  }
  return '';
};

export const surnameValidation = surname => {
  if (surname.length !== 0) {
    if (surname.length > 30) {
      return errorMessages.surnameErrorLong;
    }
    if (hasNumber(surname)) {
      return errorMessages.surnameError;
    }
  } else {
    return errorMessages.isEmptySurname;
  }
  return '';
};

export const countryValidation = country => {
  if (country.length !== 0) {
    if (country.length > 30) {
      return errorMessages.countryErrorLong;
    }
    if (hasNumber(country)) {
      return errorMessages.countryError;
    }
  } else {
    return errorMessages.isEmptyCountry;
  }
  return '';
};

export const cityValidation = city => {
  if (city.length !== 0) {
    if (city.length > 30) {
      return errorMessages.cityErrorLong;
    }
    if (hasNumber(city)) {
      return errorMessages.cityError;
    }
  } else {
    return errorMessages.isEmptyCity;
  }
  return '';
};
export const passwordValidation = password => {
  if (password.length !== 0) {
    if (password.length < 8 || password.length > 255) {
      return errorMessages.password;
    }
  } else {
    return errorMessages.isEmptyPassword;
  }
  return '';
};

export const confirmPasswordValidation = (password, confirmPassword) => {
  if (confirmPassword.length !== 0) {
    if (confirmPassword !== password) {
      return errorMessages.confirmPasswordError;
    }
  } else {
    return errorMessages.isEmptyConfirmPassword;
  }
  return '';
};

export const addressValidation = adress => {
  if (adress.length !== 0) {
    if (adress.length > 30) {
      return errorMessages.addressError;
    }
  } else {
    return errorMessages.isEmptyAddress;
  }
  return '';
};
