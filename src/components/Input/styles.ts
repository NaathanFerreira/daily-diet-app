import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 8px 0;

  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  margin-bottom: 6px;
  margin-top: 16px;
`;

type InputContainerProps = {
  isFocused: boolean;
};

export const InputContainer = styled(TextInput)<InputContainerProps>`
  ${({ theme, isFocused }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border: ${`1px solid ${
      isFocused ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_300
    }`};
  `}

  min-height: 48px;
  max-height: 48px;

  border-radius: 6px;
  padding: 14px;
`;
