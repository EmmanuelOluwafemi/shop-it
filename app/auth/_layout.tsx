import { Stack } from "expo-router";
import { Header } from "../../components";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerTitle: () => <Header isBack />,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: () => <Header isBack />,
        }}
      />
    </Stack>
  );
}
