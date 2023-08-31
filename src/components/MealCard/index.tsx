import { Text } from "react-native";
import { Meal } from "../../interfaces/Meal";
import { Container, Food, IsOnDiet, Separator, Time } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface MealCard {
  meal: Meal;
}

export function MealCard({ meal }: MealCard) {

  const { navigate } = useNavigation()

  function handleNavigateToMealDetails(){
    navigate('meal-details', { id:  meal.id })
  }

  return (
    <Container onPress={handleNavigateToMealDetails}>
      <Time>{meal.time}</Time>
      <Separator />
      <Food>{meal.name}</Food>
      <IsOnDiet isOnDiet={meal.isOnDiet} />
    </Container>
  );
}
