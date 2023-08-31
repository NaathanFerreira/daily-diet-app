import { useNavigation } from "@react-navigation/native";
import { SectionList, View } from "react-native";
import { Button } from "../../components/Button";
import { ColoredBox } from "../../components/ColoredBox";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { MealCard } from "../../components/MealCard";
import { useMealsContext } from "../../context/MealsContext";
import { Container, SectionTitle, Text } from "./styles";

export function Home() {
  const { meals } = useMealsContext();

  const { navigate } = useNavigation();

  function handleNavigateToNewMealScreen() {
    navigate("newmeal");
  }

  return (
    <Container>
      <Header />
      <ColoredBox type="PRIMARY" navigateTo="statistics" showButton>
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta " />
      </ColoredBox>
      <Text> Refeições</Text>
      <Button
        title="Nova refeição"
        type="PRIMARY"
        icon="add-circle-outline"
        onPress={handleNavigateToNewMealScreen}
      />
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={meals}
        keyExtractor={(item, index) => item.time + index}
        renderItem={({ item }) => <MealCard meal={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />
    </Container>
  );
}
