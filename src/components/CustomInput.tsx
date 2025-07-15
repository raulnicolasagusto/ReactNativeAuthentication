import { TextInput, StyleSheet, TextInputProps } from "react-native";

type CustomInputProps = {
  placeholder?: string;
} & TextInputProps;

export default function CustomInput(props: CustomInputProps){
    return (
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            {...props}
            style={[styles.input, props.style]}
        />
    );
}

const styles = StyleSheet.create({
    input: {
    borderWidth: 1,
    width: '95%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  
});