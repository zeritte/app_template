import React from "react";
import { View } from "react-native";

export const ZView = props => {
  const { children, style, flex, centerX, centerY, centerSelf, width, fullWidth } = props;
  let styles = {};
  if (flex) styles["flex"] = 1;
  if (centerX) styles = { flex: 1, alignItems: "center", ...styles };
  if (centerY) styles = { flex: 1, justifyContent: "center", ...styles };
  if (centerSelf) styles = { flex: 1, alignSelf: "center", ...styles };
  if (fullWidth) styles["width"] = "100%";
  if (width) styles["width"] = width;
  return <View style={[styles, style]}>{children}</View>;
};
