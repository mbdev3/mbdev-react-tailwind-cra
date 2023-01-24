import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import axios from 'axios';
const user = localStorage.getItem('user');
const theme = localStorage.getItem('selectedTheme');
const initialState = {
  user: user ? JSON.parse(user) : null,
  theme: theme ? theme : 'dark',
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocalStorage = ({ user }) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  const comparePassword = (password, candidatePassword) => {
    return password === candidatePassword ? true : false;
  };
  const loginUser = async (currentUser) => {
    dispatch({ type: 'LOGIN_USER_BEGIN' });
    try {
      const { data } = await axios.get('auth', currentUser);
      const user = await data.find((item) => currentUser.email === item.email);
      if (!user) {
        throw new Error("email doesn't exist");
      }
      const isPasswordCorrect = comparePassword(user.password, currentUser.password);
      if (!isPasswordCorrect) {
        throw new Error('wrong password');
      }
      dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: { user },
      });
      addUserToLocalStorage({ user });
    } catch (error) {
      dispatch({
        type: 'LOGIN_USER_ERROR',
        payload: { msg: error.response.data.msg },
      });
    }
  };
  const logoutUser = () => {
    dispatch({ type: 'LOGOUT_USER' });
    removeUserFromLocalStorage();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,

        logoutUser,
        loginUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
