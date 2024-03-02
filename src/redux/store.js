import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReduser } from './auth/authSlice';

const authPersistingConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistingConfig, authReduser)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});

export const persist = persistStore(store)
