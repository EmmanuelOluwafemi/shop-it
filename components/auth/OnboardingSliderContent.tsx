import React from "react";
import { Text, View } from "../Themed";
import { Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { Link, router } from "expo-router";
import { setString } from "../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface OnboardingSliderContentProps {
  title: string;
  description: string;
  onPress: () => void;
  isLast?: boolean;
}

export const OnboardingSliderContent = (
  props: OnboardingSliderContentProps
) => {
  const { title, description, onPress, isLast } = props;

  function handlePress() {
    // Todo: Find a way to use setString from utils.ts
    AsyncStorage.setItem("isOnboarded", "true").then(() => {
        onPress();
    });
  }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Pressable
        style={{
          backgroundColor: Colors.primary.main,
          borderRadius: 20,
          paddingVertical: 24,
          paddingHorizontal: 32,
          marginTop: 32,
        }}
        onPress={() => {
          isLast ? router.push("/auth/register") : handlePress();
        }}
      >
        <Text
          style={{
            color: Colors.light.text,
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {isLast ? "Get Started" : "Next"}
        </Text>
      </Pressable>

      <Text style={{ ...styles.description, paddingTop: 24 }}>
        Already have an account ?{" "}
        <Link style={{ color: Colors.dark.text }} href="/auth/">
          Log In
        </Link>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.dark.secondaryBackground,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 16,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    color: Colors.dark.secondaryText,
    paddingHorizontal: 32,
  },
});
