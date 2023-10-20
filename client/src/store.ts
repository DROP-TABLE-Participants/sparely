import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import componentReducer from "./stores/tokens.ts";

const reducers = combineReducers({
	components: componentReducer,
});

const persistorConfig = {
	key: "root",
	storage: localStorage,
	whitelist: ["components"],
};

const persistedReducer = persistReducer(persistorConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;