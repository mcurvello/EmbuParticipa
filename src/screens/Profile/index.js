import { View } from "react-native";
import React, { useContext } from "react";
import { SafeArea } from "../../components/SafeArea";
import { Avatar, Button, Text } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext";

const Profile = () => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea style={{ alignItems: "center" }}>
      <Avatar.Icon
        size={150}
        icon="human"
        color="#FFF"
        style={{ backgroundColor: "blue" }}
      />
      <View
        style={{
          marginTop: 20,
          marginBottom: 200,
          height: 200,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
          Marcio Curvello
        </Text>
        <Text variant="titleMedium">{user.email}</Text>
      </View>

      <Button
        icon="logout"
        mode="contained"
        style={{ width: "50%", backgroundColor: "#0086ff", marginTop: 20 }}
        onPress={() => onLogout()}
      >
        SAIR
      </Button>
    </SafeArea>
  );
};

export default Profile;
