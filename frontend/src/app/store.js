import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../features/Login/LoginSlice';
import registerReducer from '../features/Register/RegisterSlice';
import userReducer from '../features/User/UserSlice';
import movieReducer from '../features/Movie/MovieSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
    movie: movieReducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
});
