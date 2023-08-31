import { View } from "react-native";
import { ColoredBox } from "../../components/ColoredBox";
import { Highlight } from "../../components/Highlight";
import { BlankSpace, Container, Content, Row, Title } from "./styles";

export function Statistics() {
  return (
    <Container>
      <ColoredBox type="PRIMARY">
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </ColoredBox>
      <Content>
        <Title>Estatísticas gerais</Title>
        <ColoredBox fullWidth>
          <Highlight
            title="22"
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </ColoredBox>
        <BlankSpace />
        <ColoredBox fullWidth>
          <Highlight title="109" subtitle="refeições registradas" />
        </ColoredBox>
        <BlankSpace />
        <Row>
          <ColoredBox type="PRIMARY">
            <Highlight title="99" subtitle="refeições dentro da dieta" />
          </ColoredBox>
          <BlankSpace />
          <ColoredBox type="SECONDARY">
            <Highlight title="10" subtitle="refeições fora da dieta" />
          </ColoredBox>
        </Row>
      </Content>
    </Container>
  );
}
