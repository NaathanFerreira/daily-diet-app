import { Input } from "../../components/Input";
import { Text } from "react-native";
import { BlankSpace } from "../Statistics/styles";
import {
  BoxOptionYes,
  BoxOptionNo,
  Container,
  Content,
  GreenCircle,
  RedCircle,
  Row,
  Title,
} from "./styles";
import { Label } from "../../components/Input/styles";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function EditMeal() {
  const [isOnDiet, setIsOnDiet] = useState(true);

  const { navigate } = useNavigation();

  function handleNavigateToFeedbackPage() {
    isOnDiet ? navigate("positive-feedback") : navigate("negative-feedback");
  }

  return (
    <Container>
      <Title>Editar Refeição</Title>
      <Content>
        <Input label="Nome" />
        <Input label="Descrição" />
        <Row>
          <Input label="Data" />
          <BlankSpace />
          <Input label="Hora" />
        </Row>
        <Label>Está dentro da dieta?</Label>
        <Row>
          <BoxOptionYes isActive={isOnDiet} onPress={() => setIsOnDiet(true)}>
            <GreenCircle />
            <Text>Sim</Text>
          </BoxOptionYes>
          <BlankSpace />
          <BoxOptionNo isActive={!isOnDiet} onPress={() => setIsOnDiet(false)}>
            <RedCircle />
            <Text>Não</Text>
          </BoxOptionNo>
        </Row>
        <Button
          title="Salvar alterações"
          type="PRIMARY"
          onPress={handleNavigateToFeedbackPage}
        />
      </Content>
    </Container>
  );
}
