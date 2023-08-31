import { Container, FeedbackImage, Subtitle, Title } from "./styles";
import NegativeFeedbackImage from "../../assets/negativeFeedback.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function NegativeFeedback(){

  const { navigate } = useNavigation()

  function handleNavigateToHomePage(){
    navigate('home')
  }

  return (
    <Container>
      <Title type="SECONDARY">Que pena</Title>
      <Subtitle>Você saiu da dieta dessa vez, mas continue se esforçando e não desista!</Subtitle>
      <FeedbackImage source={NegativeFeedbackImage}/>
      <Button title="Ir para a página inicial" type="PRIMARY" onPress={handleNavigateToHomePage} />
    </Container>
  )
}