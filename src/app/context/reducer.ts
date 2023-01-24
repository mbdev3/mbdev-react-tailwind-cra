import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    return {
      ...initialState,
      user: null,
    };
  }
  if (action.type === 'LOGIN_USER_BEGIN') {
    return { ...state, isLoading: true };
  }
  if (action.type === 'LOGIN_USER_SUCCESS') {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    };
  }
  if (action.type === 'LOGIN_USER_ERROR') {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
};
export default reducer;
