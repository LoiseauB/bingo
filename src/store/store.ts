import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import bingoSlice from "./features/bingoSlice";

const bingoReducer = persistReducer(
  { key: "bingo", storage: localStorage },
  bingoSlice,
);

const store = configureStore({
  reducer: {
    bingo: bingoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persist = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
