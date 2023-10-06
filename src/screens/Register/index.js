import React, { useContext, useState } from "react";
import { Container, Header } from "./styles";
import { Button, Text, TextInput } from "react-native-paper";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";

export const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Image
            source={require("../../../assets/logo.png")}
            style={{ height: 300, width: 300, marginTop: -20 }}
          />
          <Text
            variant="displaySmall"
            style={{ fontWeight: 700, color: "#165783", marginBottom: 50 }}
          >
            CADASTRO
          </Text>
          <View>
            <TextInput
              placeholder="Nome completo"
              value={name}
              left={<TextInput.Icon iconColor="gray" icon="account" />}
              style={{ width: 340, backgroundColor: "transparent" }}
              outlineStyle={{
                borderRadius: 50,
                borderColor: "#fff",
                borderWidth: 2,
              }}
              onChangeText={(text) => setName(text)}
            />
            <TextInput
              placeholder="Telefone"
              value={phone}
              left={<TextInput.Icon iconColor="gray" icon="cellphone" />}
              style={{ width: 340, backgroundColor: "transparent" }}
              outlineStyle={{
                borderRadius: 50,
                borderColor: "#fff",
                borderWidth: 2,
              }}
              onChangeText={(text) => setPhone(text)}
            />
            <TextInput
              placeholder="E-mail"
              value={mail}
              left={<TextInput.Icon iconColor="gray" icon="email" />}
              style={{ width: 340, backgroundColor: "transparent" }}
              outlineStyle={{
                borderRadius: 50,
                borderColor: "#fff",
                borderWidth: 2,
              }}
              onChangeText={(text) => setMail(text)}
            />
            <TextInput
              placeholder="Senha"
              value={password}
              left={
                <TextInput.Icon
                  iconColor="gray"
                  icon="lock"
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                    return false;
                  }}
                />
              }
              style={{ width: 340, backgroundColor: "transparent" }}
              outlineStyle={{
                borderRadius: 50,
                borderColor: "#fff",
                borderWidth: 2,
              }}
              secureTextEntry={secureTextEntry}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Button
            mode="contained-tonal"
            buttonColor="#0086ff"
            textColor="#fff"
            style={{ marginTop: 70, width: 330 }}
            onPress={() => onRegister(mail, password)}
          >
            CONCLUIR O CADASTRO
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Text variant="labelLarge">Já tem conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                variant="labelLarge"
                style={{ textDecorationLine: "underline" }}
              >
                Entre em sua conta.
              </Text>
            </TouchableOpacity>
          </View>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
