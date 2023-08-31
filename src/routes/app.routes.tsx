import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewMeal } from "../screens/NewMeal";
import { Statistics } from "../screens/Statistics";
import { PositiveFeedback } from "../screens/Feedback/PositiveFeedback";
import { NegativeFeedback } from "../screens/Feedback/NegativeFeedback";
import { MealDetails } from "../screens/MealDetails/MealDetails";
import { EditMeal } from "../screens/EditMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newmeal" component={NewMeal} />
      <Screen name="editmeal" component={EditMeal} />
      <Screen name="meal-details" component={MealDetails} />
      <Screen name="positive-feedback" component={PositiveFeedback} />
      <Screen name="negative-feedback" component={NegativeFeedback} />
    </Navigator>
  );
}
