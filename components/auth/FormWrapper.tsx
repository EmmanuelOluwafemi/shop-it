import React from "react";
import { View } from "../Themed";
import colors from "../../constants/colors";
import { BodyTextRegular, HeadingText } from "../StyledText";

interface FormWrapperProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const FormWrapper = (props: FormWrapperProps) => {
  const { title, subtitle, children } = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          height: "90%",
          width: "100%",
          backgroundColor: colors.dark.secondaryBackground,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingHorizontal: 24,
          paddingVertical: 48,
        }}
      >
        <HeadingText
          fontSize={24}
          style={{
            textAlign: "center",
            color: colors.dark.text,
          }}
        >
          {title}
        </HeadingText>

        <BodyTextRegular
          fontSize={14}
          style={{
            textAlign: "center",
            color: colors.dark.secondaryText,
            marginTop: 12,
          }}
        >
          {subtitle}
        </BodyTextRegular>

        {children}
      </View>
    </View>
  );
};
