import React from "react";
import { Text, View } from "./Themed";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface HeaderProps {
  isBack?: boolean;
  title?: string;
}

const windowWidth = Dimensions.get("window").width;

// shows a page title and a back button if isBack is true

export const Header = ({ isBack, title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity
          style={styles.backWrapper}
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="chevron-back" size={20} style={styles.backIcon} />
        </TouchableOpacity>
      ) : null}

      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  backWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    borderColor: colors.dark.tabIconDefault,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backIcon: {
    color: colors.dark.tabIconDefault,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark.tabIconDefault,
    marginLeft: -30,
    textAlign: "center",
  },
});
