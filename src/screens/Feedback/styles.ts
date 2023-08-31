import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 60px 16px;
  align-items: center;
`

export type TitleTypeStyleProps = "PRIMARY" | "SECONDARY"

type TitleProps = {
  type: TitleTypeStyleProps;
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, type }) => css`
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}

  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  margin-top: 10px;
  text-align: center;
`

export const FeedbackImage = styled.Image`
  width: 224px;
  height: 288px;

  margin: 32px 0;
`;