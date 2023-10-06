import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import MapView from "react-native-maps";
import { Searchbar } from "react-native-paper";

const MapContainer = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const lat = "-23.829421";
const lng = "-46.814881";

export const Map = () => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 50,
          zIndex: 999,
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Searchbar
          placeholder="Buscar uma reclamação"
          iconColor="#0086ff"
          style={{ backgroundColor: "#FFF" }}
        />
      </View>
      <MapContainer
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.02,
        }}
      ></MapContainer>
    </>
  );
};
