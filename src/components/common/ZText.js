import React from "react";
import { Text } from "react-native";

export const ZText = props => {
  const { children, style, font, size, center, color } = props;
  let styles = { fontSize: 14 };
  switch (font) {
    case "bold":
      styles["fontFamily"] = "boldFont";
      break;
    case "italic":
      styles["fontFamily"] = "italicFont";
      break;
    case "light":
      styles["fontFamily"] = "lightFont";
      break;
    case "normal":
    default:
      styles["fontFamily"] = "normalFont";
  }
  if (size) styles["fontSize"] = parseInt(size);
  if (center) styles = { textAlign: "center", textAlignVertical: "center", ...styles };
  if (color) styles["color"] = color;
  return <Text style={[styles, style]}>{children}</Text>;
};
