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
        <ZText size={35}>Dashboard Screen</ZText>
      </ZView>
    </ZContainer>
  );
};
