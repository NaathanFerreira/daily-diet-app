import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStylesProps, Container, Icon, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  icon?: keyof typeof MaterialIcons.glyphMap;
  type: ButtonTypeStylesProps;
  title: string;
}

export function Button({ icon, title, type, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
