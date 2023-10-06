import styled from "styled-components/native";

export const CardContainer = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 16px;
  background-color: #fff;
  flex-direction: row;
  padding: 12px;
  align-items: center;
  border-radius: 16 px;
`;

export const CardImage = styled.Image``;

export const CardContent = styled.View`
  flex: 1;
  margin-left: 12px;
  height: 64px;
  justify-content: space-between;
`;

export const CardValue = styled.View`
  align-items: center;
  justify-content: space-around;
  height: 64px;
`;

export const CardQuantity = styled.View`
  flex-direction: row;
  align-items: center;
`;
