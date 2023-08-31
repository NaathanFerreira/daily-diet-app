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

export const Row = styled.View`
  max-width: 175px;
  margin-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

type BoxOptionProps = {
  isActive?: boolean;
};

export const BoxOptionYes = styled.TouchableOpacity<BoxOptionProps>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px;

  border-radius: 6px;

  ${({ theme, isActive }) => css`
    border: ${`1px solid ${
      isActive ? theme.COLORS.GREEN_DARK : "transparent"
    }`};
    background: ${isActive ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_200};
  `}
`;

export const BoxOptionNo = styled.TouchableOpacity<BoxOptionProps>`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px;

  border-radius: 6px;

  ${({ theme, isActive }) => css`
    border: ${`1px solid ${isActive ? theme.COLORS.RED_DARK : "transparent"}`};
    background: ${isActive ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};
  `}
`;

export const GreenCircle = styled.View`
  width: 10px;
  height: 10px;

  margin-right: 8px;

  border-radius: 50%;

  background: ${({ theme }) => theme.COLORS.GREEN_MID};
`;

export const RedCircle = styled.View`
  width: 10px;
  height: 10px;

  border-radius: 50%;

  margin-right: 8px;

  background: ${({ theme }) => theme.COLORS.RED_MID};
`;
