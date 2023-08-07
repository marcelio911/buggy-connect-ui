import { Slot } from "expo-router";

import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function () {
  return (
    <SafeAreaProvider>
      <Slot />;
    </SafeAreaProvider>
  )
  
}