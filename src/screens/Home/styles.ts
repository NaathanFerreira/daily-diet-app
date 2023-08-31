import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Text = styled.Text`
  margin-top: 48px;
  margin-bottom: 14px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-weight: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const SectionTitle = styled.Text`
  margin-top: 30px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`;
