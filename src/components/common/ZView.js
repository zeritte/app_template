import React from "react";
import { View } from "react-native";

export const ZView = props => {
  const { children, style, flex, centerX, centerY, centerSelf, width, fullWidth } = props;
  let styles = {};
  if (flex) styles["flex"] = 1;
  if (centerX) styles = { alignItems: "center", ...styles };
  if (centerY) styles = { justifyContent: "center", ...styles };
  if (centerSelf) styles = { alignSelf: "center", ...styles };
  if (fullWidth) styles["width"] = "100%";
  if (width) styles["width"] = width;
  return <View style={[styles, style]}>{children}</View>;
};
