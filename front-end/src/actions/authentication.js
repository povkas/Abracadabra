import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getUser, snackbarMessages } from '../utils/constants';
import { SET_CURRENT_USER, LOGOUT } from './types';
import setAuthToken from '../components/login/setAuthToken';
import { validateInfo } from './usersAction';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const loginUser = (user, openSnackbar, setError) => dispatch => {
  axios
    .post(getUser, user)
    .then(res => {
      localStorage.setItem('jwtToken', res.data);
      setAuthToken(res.data);
      validateInfo(jwtDecode(res.data).unique_name).then(userData => {
        dispatch(setCurrentUser(userData));
      });
      openSnackbar({
        message: snackbarMessages.loginSuccess,
        variant: 'success'
      });
    })
    .catch(err => {
      setError(err);
    });
};

export const logoutUser = dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch({ type: LOGOUT });
};
