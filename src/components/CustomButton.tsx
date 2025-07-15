import { Pressable,Text, StyleSheet, PressableProps } from "react-native"

type CustomButtonProps = {
   text: string;
} & PressableProps;

export default function CustomButton( {text, ...Props}: CustomButtonProps){
    return (
            <Pressable style={styles.button} {...Props}> 
              <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
          );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: '95%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});