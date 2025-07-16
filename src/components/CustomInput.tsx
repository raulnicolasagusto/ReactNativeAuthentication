import { TextInput, StyleSheet, TextInputProps, Text, View } from "react-native";
import { Control, Path, Controller, FieldValues } from "react-hook-form";

type CustomInputProps<T extends FieldValues> = {
  control: Control<T>; // Type for the control prop from react-hook-form
  name: Path<T>; // Name of the field in the form
} & TextInputProps;

export default function CustomInput<T extends FieldValues>({control, name, ...props}: CustomInputProps<T>){
    return (

        <Controller
              control={control}
              name={name}
              render={({field: {onChange, onBlur, value}, fieldState: {error}}) => ( 
              <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    {...props}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    style={[styles.input, props.style]}
                  />
                  <Text style={styles.error}>{error?.message }</Text>
              </View>
              )}
            />


        
    );
}

const styles = StyleSheet.create({
    container: {
      gap: 2,
        width: '100%',
        alignItems: 'center',
    },
    input: {
    borderWidth: 1,
    width: '95%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  error: {
    color: 'crimson',
    fontSize: 13,
  }
  
});