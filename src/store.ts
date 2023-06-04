import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import levelSlice from './components/experience/levelSlice';

export const store: ToolkitStore = configureStore({
  reducer: {
    level: levelSlice,
  },
  //middleware: (getDefaultMiddleware) =>
  //getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
