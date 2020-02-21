import React from "react";
import { ZView, ZText, ZContainer, ZButton } from "../common";

import { useDispatch } from "react-redux";
import { signOut } from "../../actions";

export default props => {
  const dispatch = useDispatch();
  const { navigation } = props;
  return (
    <ZContainer>
      <ZView flex centerX centerY>
        <ZText size={35}>Profile Screen</ZText>
        <ZButton onPress={() => dispatch(signOut(navigation))}>
          <ZText color="white">Logout</ZText>
        </ZButton>
      </ZView>
    </ZContainer>
  );
};
