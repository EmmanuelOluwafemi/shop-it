import { TextInput, TextInputProps } from "react-native";
import colors from "../constants/colors";
import { bodyFonts, borderRadius, borderWidth, padding } from "../constants";

interface StyledInputProps extends TextInputProps {}

const inputHeight = 56;

export function StyledInput(props: StyledInputProps) {
  return (
    <TextInput
      {...props}
      style={[
        props.style,
        {
          fontFamily: "InterRegular",
          backgroundColor: colors.dark.background,
          padding: padding.large,
          borderRadius: borderRadius.large,
          fontSize: bodyFonts.body3,
          height: inputHeight,
          borderColor: colors.dark.inputBorder,
          borderWidth: borderWidth.thin,
          color: colors.dark.text,
        },
      ]}
    />
  );
}
