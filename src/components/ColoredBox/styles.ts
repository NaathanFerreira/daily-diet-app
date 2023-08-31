import styled, { DefaultTheme } from "styled-components/native";

export type ColoredBoxTypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type ColoredBoxProps = {
  type: ColoredBoxTypeStyleProps;
  fullWidth: boolean;
};

function getBackgroundColor(
  type: ColoredBoxTypeStyleProps,
  theme: DefaultTheme
) {
  switch (type) {
    case "PRIMARY":
      return theme.COLORS.GREEN_LIGHT;
    case "SECONDARY":
      return theme.COLORS.RED_LIGHT;
    default:
      return theme.COLORS.GRAY_200;
  }
}

export const Container = styled.View<ColoredBoxProps>`
  width: ${({ theme, fullWidth }) => (fullWidth ? "100%" : "auto")};
  background: ${({ theme, type }) => getBackgroundColor(type, theme)};
  padding: 16px;
  border-radius: 8px;

  position: relative;
`;

export const ButtonIconContainer = styled.View`
  position: absolute;
  right: 1px;
  top: 10px;
`;
