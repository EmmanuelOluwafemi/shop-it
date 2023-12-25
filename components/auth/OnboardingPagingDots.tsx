import React from "react";
import { Text, View } from "../Themed";
import { onboardingSteps } from "../../constants";
import Colors from "../../constants/colors";

interface OnboardingPagingDotsProps {
    activeIndex: number;
}

export const OnboardingPagingDots = ({ activeIndex }: OnboardingPagingDotsProps) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: 24,
      }}
    >
      {
        onboardingSteps.map((step, index) => (
            <View
                key={step.id}
                style={{
                width: activeIndex === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: activeIndex === index ? Colors.primary.main : Colors.dark.secondaryText,
                margin: 4,
                }}
            />
        ))
      }
    </View>
  );
};
