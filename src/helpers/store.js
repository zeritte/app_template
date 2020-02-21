import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { createWhitelistFilter } from "redux-persist-transform-filter";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  transforms: [createWhitelistFilter("auth", ["uid", "email"])]
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
