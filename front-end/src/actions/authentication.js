import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getUser, snackbarMessages } from '../utils/constants';
import { SET_CURRENT_USER, LOGOUT } from './types';
import setAuthToken from '../components/login/setAuthToken';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const loginUser = (user, openSnackbar) => dispatch => {
  axios
    .post(getUser, user)
    .then(res => {
      localStorage.setItem('jwtToken', res.data);
      setAuthToken(res.data);
      dispatch(setCurrentUser(jwtDecode(res.data)));
      openSnackbar({
        message: snackbarMessages.loginSuccess,
        variant: 'success'
      });
    })
    .catch(err => {
      const errors = err.response
        ? { message: `${err.response.status} : ${err.response.data.Message}` }
        : { message: snackbarMessages.unidentified };
      openSnackbar({ message: errors.message, variant: 'error' });
    });
};

export const logoutUser = dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch({ type: LOGOUT });
};
