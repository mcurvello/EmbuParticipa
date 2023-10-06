import React from "react";
import { Image, View } from "react-native";
import { Container } from "./styles";
import { Button, Text } from "react-native-paper";

export const Account = ({ navigation }) => {
  return (
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
      <View style={{ marginTop: 170 }}>
        <Button
          mode="contained-tonal"
          buttonColor="#165783"
          textColor="#fff"
          onPress={() => navigation.navigate("Login")}
        >
          INICIAR SESSÃO
        </Button>
        <Button
          mode="contained-tonal"
          buttonColor="#165783"
          textColor="#fff"
          style={{ marginTop: 30, width: 330 }}
          onPress={() => navigation.navigate("Register")}
        >
          CADASTRAR
        </Button>
      </View>
    </Container>
  );
};
