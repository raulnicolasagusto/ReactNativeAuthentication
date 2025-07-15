import { TextInput, StyleSheet, TextInputProps } from "react-native";
import { Controller } from "react-hook-form";

type CustomInputProps = {
  control: any; // Type for the control prop from react-hook-form
  name: string; // Name of the field in the form
} & TextInputProps;

export default function CustomInput({control, name, ...props}: CustomInputProps){
    return (

        <Controller control={control}
              name={name}
              render={({field: {onChange, onBlur, value}}) => ( 
              <TextInput
                  autoCapitalize='none'
                  autoCorrect={false}
                  {...props}
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  style={[styles.input, props.style]}
                />
              )}
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