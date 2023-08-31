import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;

  padding: 14px 16px 14px 12px;
  border-radius: 6px;
  border: ${({ theme }) => `1px solid ${theme.COLORS.GRAY_300}`};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-weight: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Separator = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  /* margin: 0 12px; */
`;

export const Food = styled.Text`
  max-width: 70%;
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-weight: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

type IsOnDietProps = {
  isOnDiet: boolean;
};

export const IsOnDiet = styled.View<IsOnDietProps>`
  width: 14px;
  height: 14px;

  border-radius: 50%;

  background: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
