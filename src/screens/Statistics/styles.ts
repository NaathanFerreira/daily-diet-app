import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 16px;
  padding: 24px;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_100};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-weight: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  margin-bottom: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

//css flex gap property does not work
export const BlankSpace = styled.View`
  height: 16px;
  width: 16px;
  background: transparent;
`;
