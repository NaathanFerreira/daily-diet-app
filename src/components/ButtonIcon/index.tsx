import { ButtonIconTypeStylesProps, Contaier, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof Feather.glyphMap;
  type: ButtonIconTypeStylesProps;
}

export function ButtonIcon({ icon, type, ...rest }: ButtonIconProps) {
  return (
    <Contaier {...rest}>
      <Icon name={icon} type={type} />
    </Contaier>
  );
}
