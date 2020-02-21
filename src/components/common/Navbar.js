import React from "react";
import { StatusBar } from "react-native";
import { ZView } from "./ZView";
import { ZText } from "./ZText";

const StatusHeight = StatusBar.currentHeight || 0;

export const Navbar = props => {
  return (
    <ZView style={styles.container}>
      <ZText>Navbar</ZText>
    </ZView>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    minHeight: 50,
    height: 50 + StatusHeight,
    marginBottom: 20
  }
};
