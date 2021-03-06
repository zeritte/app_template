import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./src/helpers";
import { AppNavigator, LoadingScreen } from "./src/components/common";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

export default function() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    _loadResourcesAsync()
      .then(_handleFinishLoading)
      .catch(_handleLoadingError);
  }, []);

  const _loadResourcesAsync = async () => {
    // const cacheAssets = Asset.loadAsync();
    const cacheFonts = Font.loadAsync({
      normalFont: require("./assets/fonts/Poppins-Regular.otf"),
      boldFont: require("./assets/fonts/Poppins-Bold.otf"),
      lightFont: require("./assets/fonts/Poppins-Light.otf"),
      italicFont: require("./assets/fonts/Poppins-Italic.otf")
    });
    return Promise.all([cacheFonts]);
  };

  const _handleLoadingError = error => console.warn(error);

  const _handleFinishLoading = () => {
    setIsReady(true);
  };

  if (!isReady) return <LoadingScreen />;
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
