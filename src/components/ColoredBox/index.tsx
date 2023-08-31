import { ReactNode } from "react";
import {
  ButtonIconContainer,
  ColoredBoxTypeStyleProps,
  Container,
} from "./styles";
import { ButtonIcon } from "../ButtonIcon";
import { useNavigation } from "@react-navigation/native";

type navigateOptions = "statistics";

interface ColoredBoxProps {
  type?: ColoredBoxTypeStyleProps;
  children: ReactNode;
  showButton?: boolean;
  navigateTo?: navigateOptions;
  fullWidth?: boolean;
}

export function ColoredBox({
  type = "DEFAULT",
  showButton = false,
  navigateTo,
  fullWidth = false,
  children,
}: ColoredBoxProps) {
  const { navigate } = useNavigation();

  function handleNavigate() {
    if (navigateTo) {
      navigate(navigateTo);
    }
  }

  return (
    <>
      <Container type={type} fullWidth={fullWidth}>
        {children}
        {showButton && type !== "DEFAULT" && (
          <ButtonIconContainer>
            <ButtonIcon
              icon="arrow-up-right"
              type={type}
              onPress={handleNavigate}
            />
          </ButtonIconContainer>
        )}
      </Container>
    </>
  );
}
