import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;

  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const UserProfile = styled.Image`
  width: 40px;
  height: 40px;

  border: ${({ theme }) => `2px solid ${theme.COLORS.GRAY_600}`};
  border-radius: 50%;
`;
