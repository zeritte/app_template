import React from "react";
import { TouchableOpacity } from "react-native";
import { Spinner } from "./Spinner";

export const ZButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        {
          alignItems: "center",
          backgroundColor: "#28497d",
          padding: 14,
          borderRadius: 15,
          height: 50
        },
        props.style
      ]}
      disabled={props.loading || props.disabled}
    >
      {props.loading ? <Spinner size="small" style={{ height: 22 }} /> : props.children}
    </TouchableOpacity>
  );
};
