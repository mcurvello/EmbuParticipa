import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
  colors: ["#9fd3e9", "#a5deff"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
