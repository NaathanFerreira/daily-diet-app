import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  text-align: center;
`;

export const Content = styled.View`
  margin-top: 32px;
  padding: 24px;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;
