import React, { useContext, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Container } from "./styles";
import { Button, Text, TextInput } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";

export const Login = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Image
            source={require("../../../assets/logo.png")}
            style={{ height: 300, width: 300 }}
          />
          <Text
            variant="displaySmall"
            style={{ fontWeight: 700, color: "#165783", marginTop: 30 }}
          >
            EMBU PARTICIPA
          </Text>
          <View
            style={{
              marginTop: 30,
              height: 220,
              justifyContent: "space-between",
            }}
          >
            <TextInput
              mode="outlined"
              placeholder="E-mail"
              value={mail}
              placeholderTextColor="#0086ff"
              textColor="#000"
              left={<TextInput.Icon iconColor="#0086ff" icon="account" />}
              style={{ backgroundColor: "transparent" }}
              outlineStyle={{
                borderRadius: 50,
                borderColor: "#0086ff",
                borderWidth: 2,
              }}
              onChangeText={(text) => setMail(text)}
            />
            <TextInput
              mode="outlined"
              placeholder="Senha"
              value={password}
              placeholderTextColor="#0086ff"
              textColor="#000"
              left={
                <TextInput.Icon
                  iconColor="#0086ff"
                  icon="eye"
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                    return false;
                  }}
                />
              }
              style={{ backgroundColor: "transparent" }}
              outlineStyle={{
                borderRadius: 50,
                borderColor: "#0086ff",
                borderWidth: 2,
              }}
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              mode="contained-tonal"
              buttonColor="#0086ff"
              textColor="#fff"
              style={{ marginTop: 8, width: 330 }}
              onPress={() => onLogin(mail, password)}
            >
              INICIAR SESSÃO
            </Button>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 60,
            }}
          >
            <Text variant="labelLarge" style={{ color: "#000" }}>
              Não tem conta?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text
                variant="labelLarge"
                style={{ color: "#000", textDecorationLine: "underline" }}
              >
                Crie uma conta.
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
