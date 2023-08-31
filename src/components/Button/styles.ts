import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

type ButtonProps = {
  type: ButtonTypeStylesProps;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px 24px;

  border-radius: 6px;

  ${({ theme, type }) => css`
    background: ${type === "PRIMARY" ? theme.COLORS.GRAY_600 : "transparent"};
    border: ${type === "PRIMARY"
      ? "none"
      : `1px solid ${theme.COLORS.GRAY_700}`};
  `}
`;

export const Title = styled.Text<ButtonProps>`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(
  ({ theme, type }) => ({
    size: 14,
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  })
)`
  margin-right: 14px;
`;
