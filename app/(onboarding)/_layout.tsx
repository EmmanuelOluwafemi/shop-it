import { Link, Stack, Tabs, router } from "expo-router";

import Colors from "../../constants/colors";
import { useEffect } from "react";
import { getString } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnboardingLayout() {

  async function checkOnboarded() {
    const isOnboarded = await getString("isOnboarded");
    if (isOnboarded === null) {
      router.push("/(onboarding)/");
    } else {
      router.push("/auth/");
    }
  } 

  useEffect(() => {
    checkOnboarded();
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerStyle: {
            backgroundColor: Colors.dark.background,
          },
          headerTintColor: Colors.dark.background,
        }}
      />
    </Stack>
  );
}
