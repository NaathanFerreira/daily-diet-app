import { StatusBar } from "expo-status-bar";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { useFonts } from "@expo-google-fonts/nunito-sans/useFonts";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

export default function App() {
  const [isFontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      {isFontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
