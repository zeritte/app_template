import React, { useState } from "react";
import { ZText, ZView, InputContainer, ZInput, ZButton } from "../common";
import { Ionicons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";

export default props => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { authLoading, authError } = useSelector(state => ({
    authLoading: state.auth.authLoading,
    authError: state.auth.authError
  }));
  const dispatch = useDispatch();
  const { navigation } = props;

  const _login = () => dispatch(login(email, pass, navigation));

  return (
    <InputContainer>
      <ZView centerX centerSelf width="80%">
        <ZView>
          <ZText size={30} font="bold">
            Welcome!
          </ZText>
        </ZView>
        <ZView flex centerY>
          <ZText center color="red">
            {authError}
          </ZText>
          <ZView style={{ paddingVertical: 20 }}>
            <ZInput
              icon={<Ionicons name="md-mail" size={32} color="black" />}
              borderBottomColor="black"
              setter={setEmail}
              value={email}
              autoCapitalize="none"
              autoCompleteType="email"
              textContentType="emailAddress"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="your email"
              placeholderTextColor="gray"
            />
          </ZView>
          <ZView style={{ paddingVertical: 20 }}>
            <ZInput
              icon={<Ionicons name="md-lock" size={32} color="black" />}
              borderBottomColor="black"
              setter={setPass}
              value={pass}
              placeholder="your password"
              secureTextEntry
              placeholderTextColor="gray"
              onSubmitEditing={_login}
            />
          </ZView>
          <ZButton onPress={_login} loading={authLoading}>
            <ZText color="white">Go!</ZText>
          </ZButton>
        </ZView>
      </ZView>
    </InputContainer>
  );
};
