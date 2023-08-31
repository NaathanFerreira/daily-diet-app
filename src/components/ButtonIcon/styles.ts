import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type ButtonIconTypeStylesProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: ButtonIconTypeStylesProps;
};

export const Contaier = styled.TouchableOpacity`
  width: 24px;
  height: 24px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))``;
