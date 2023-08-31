import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Highlight } from "../../components/Highlight";
import { BlankSpace } from "../Statistics/styles";
import { Container, Content, Title } from "./styles";

export function MealDetails() {
  const { navigate } = useNavigation();

  function handleNavigateToEditMealPage() {
    navigate("editmeal");
  }

  return (
    <Container>
      <Title>Refeição</Title>
      <Content>
        <Highlight title="Sanduíche" subtitle="Sanduíche de atum" />
        <BlankSpace />
        <Highlight title="Data e hora" subtitle="22/11/2000 às 16:00" />
        <BlankSpace />
        <Button
          title="Editar refeição"
          type="PRIMARY"
          onPress={handleNavigateToEditMealPage}
        />
        <BlankSpace />
        <Button title="Excluir refeição" type="SECONDARY" />
        <BlankSpace />
      </Content>
    </Container>
  );
}
