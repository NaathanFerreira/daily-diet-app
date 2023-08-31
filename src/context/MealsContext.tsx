import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Meal } from "../interfaces/Meal";

type MealsByDateSections = {
  title: string;
  data: Meal[];
};

type MealsContextType = {
  meals: MealsByDateSections[];
};

const MealsContext = createContext({} as MealsContextType);

interface MealsContextProviderProps {
  children: ReactNode;
}

const mock_meals: MealsByDateSections[] = [
  {
    title: "12.08.22",
    data: [
      {
        id: "1",
        date: "12.08.22",
        time: "20:00",
        name: "X-tudo",
        description: "Description",
        isOnDiet: false,
      },
      {
        id: "2",
        date: "12.08.22",
        time: "16:00",
        name: "Whey protein com leite",
        description: "Description",
        isOnDiet: true,
      },
      {
        id: "3",
        date: "12.08.22",
        time: "12:30",
        name: "Salada cesar com frango e arroz",
        description: "Description",
        isOnDiet: true,
      },
      {
        id: "4",
        date: "12.08.22",
        time: "08:30",
        name: "Vitamina de banana com aveia com uma pitada de mel",
        description: "Description",
        isOnDiet: true,
      },
    ],
  },
  {
    title: "11.08.22",
    data: [
      {
        id: "5",
        date: "11.08.22",
        time: "20:00",
        name: "X-tudo",
        description: "Description",
        isOnDiet: false,
      },
      {
        id: "6",
        date: "11.08.22",
        time: "16:00",
        name: "Whey protein com leite",
        description: "Description",
        isOnDiet: true,
      },
      {
        id: "7",
        date: "11.08.22",
        time: "12:30",
        name: "Salada cesar com frango e arroz",
        description: "Description",
        isOnDiet: true,
      },
      {
        id: "8",
        date: "11.08.22",
        time: "08:30",
        name: "Vitamina de banana com aveia com uma pitada de mel",
        description: "Description",
        isOnDiet: true,
      },
    ],
  },
];

export function MealsContextProvider({ children }: MealsContextProviderProps) {
  const [meals, setMeals] = useState<MealsByDateSections[]>([]);

  useEffect(() => {
    setMeals([...mock_meals]);
  }, []);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
}

export function useMealsContext() {
  const mealsContet = useContext(MealsContext);
  return mealsContet;
}
