import styled, { css } from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-weight: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-weight: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
