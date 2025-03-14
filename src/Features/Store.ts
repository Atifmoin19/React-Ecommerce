import storageSession from "redux-persist/lib/storage/session";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HomePageReducer } from "./homePageReducer";

const persistConfig = {
  key: `STORE_${import.meta.env.VITE_APP_ENV}`,
  storage: storageSession,
};

const reducers = combineReducers({
  homePage: HomePageReducer,
  //   customer360: customer360Reducer,
  //   [motorApi.reducerPath]: motorApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  //   reducer: reducers,
  middleware: (gDM) =>
    gDM({ serializableCheck: false })
      .concat
      // motorApi.middleware
      (),
  // devTools: import.meta.env.MODE !== "production",
  // devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
