import React from "react";
import { View } from "./Themed";
import { Image } from "react-native";

export const Logo = () => {
  return (
    <View style={{
        alignItems: "center",
        paddingVertical: 20,
        paddingBottom: 40,
    }}>
      <Image
        resizeMode="contain"
        source={require("../assets/images/logo.png")}
        style={{ width: 112 }}
      />
    </View>
  );
};
