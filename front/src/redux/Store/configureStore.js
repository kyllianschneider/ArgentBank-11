import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "../reducer/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    user : userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer :  persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export default store;