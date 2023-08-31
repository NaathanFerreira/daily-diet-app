import { Container, FeedbackImage, Subtitle, Title } from "./styles";
import PositiveFeedbackImage from "../../assets/positiveFeedback.png";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function PositiveFeedback(){

  const { navigate } = useNavigation()

  function handleNavigateToHomePage(){
    navigate('home')
  }

  return (
    <Container>
      <Title type="PRIMARY">Continue assim</Title>
      <Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>
      <FeedbackImage source={PositiveFeedbackImage}/>
      <Button title="Ir para a página inicial" type="PRIMARY" onPress={handleNavigateToHomePage} />
    </Container>
  )
}