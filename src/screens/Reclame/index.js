import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Camera, CameraType } from "expo-camera";

import { SafeArea } from "../../components/SafeArea";
import { Button, Text, TextInput } from "react-native-paper";

export const Reclame = ({ navigation }) => {
  const [complaint, setComplaint] = useState("");
  const [email, setEmail] = useState("");
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const handleComplaintSubmit = () => {
    console.log("Reclamação:", complaint);
    console.log("Email:", email);
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Permitir o uso da câmera para enviar uma foto da reclamação
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <SafeArea>
      <View styles={styles.container}>
        <Text
          variant="displaySmall"
          style={{
            fontWeight: 700,
            color: "#fff",
            marginTop: 30,
            marginBottom: 50,
            textAlign: "center",
          }}
        >
          Envie seu reclame
        </Text>
        <TextInput
          label="Digite a sua reclamação"
          value={complaint}
          onChangeText={(text) => setComplaint(text)}
          style={styles.input}
        />
        <TextInput
          label="Escrava o seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <Camera style={styles.camera} type={CameraType.back} />

        <Button
          mode="contained"
          onPress={handleComplaintSubmit}
          style={styles.button}
          textColor="#0086ff"
          width={300}
        >
          Enviar Reclamação
        </Button>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    margin: 16,
  },
  camera: {
    width: 250,
    height: 250,
    marginTop: 16,
    alignSelf: "center",
  },

  button: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 58,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0086ff",
  },
});
