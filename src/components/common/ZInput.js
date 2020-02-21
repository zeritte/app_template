import React from "react";
import { TextInput } from "react-native";
import { ZView } from "./ZView";

export const ZInput = props => {
  const { value, setter, icon, borderBottomColor } = props;
  return (
    <ZView
      centerY
      centerX
      style={[
        { flexDirection: "row", borderBottomWidth: 1, borderBottomColor, maxHeight: 50 },
        props.containerStyle
      ]}
    >
      {icon}
      <TextInput
        style={{
          height: 50,
          paddingLeft: 10,
          fontFamily: "normalFont",
          color: "black",
          fontSize: 14,
          width: "100%"
        }}
        onChangeText={value => setter(value)}
        value={value}
        {...props}
      />
    </ZView>
  );
};
