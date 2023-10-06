import { Text } from "react-native";
import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  CardQuantity,
  CardValue,
} from "./styles";
import { Avatar, Button, Card, IconButton } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="account" />;

const ReclameCard = ({ reclame }) => {
  return (
    <Card style={{ margin: 12 }}>
      <Card.Title
        title={reclame.title}
        titleVariant="headlineSmall"
        titleStyle={{ fontWeight: "bold" }}
        subtitle={reclame.author}
        subtitleVariant="bodyLarge"
        left={LeftContent}
      />
      <Card.Content>
        <Text
          variant="titleLarge"
          style={{ fontWeight: "bold", marginVertical: 8 }}
        >
          Descrição:
        </Text>
        <Text variant="bodyMedium" style={{ marginBottom: 8 }}>
          {reclame.description}
        </Text>
      </Card.Content>
      <Card.Cover style={{ margin: 8 }} source={{ uri: reclame.image }} />
    </Card>
  );
};

export default ReclameCard;
