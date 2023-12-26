import { StyleSheet } from "react-native";
import { FormWrapper, Logo, StyledInput, View } from "../../components";

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo />


      <FormWrapper
        title="Welcome Back"
        subtitle="Enter your details below"
      >
        <StyledInput placeholder="Hello" />
      </FormWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
