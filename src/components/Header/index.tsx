import { Container, Logo, UserProfile } from "./styles";
import LogoImg from "../../assets/logo.png";
import UserProfileImg from "../../assets/userProfileImg.jpg";

export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <UserProfile source={UserProfileImg} />
    </Container>
  );
}
