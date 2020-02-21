import React, { useEffect } from "react";
import LoadingImageScreen from "./LoadingImageScreen";

import { useSelector } from "react-redux";

export default props => {
  const { navigation } = props;
  const uid = useSelector(state => state.auth.uid);
  const email = useSelector(state => state.auth.email);

  useEffect(() => {
    loadApp();
  }, []);

  function loadApp() {
    if (email && uid) {
      navigation.navigate("App");
    } else {
      navigation.navigate("Auth");
    }
  }
  return <LoadingImageScreen />;
};
