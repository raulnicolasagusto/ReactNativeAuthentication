import { Pressable,Text, StyleSheet, PressableProps, View } from "react-native"

type CustomButtonProps = {
   text: string;
   icon?: React.ReactNode; 
} & PressableProps;

export default function CustomButton( {text, icon, ...Props}: CustomButtonProps){
    return (
            <Pressable style={styles.button} {...Props}>
              <View style={styles.content} >
                  {icon}
                <Text style={styles.buttonText}>{text}</Text>
              </View>
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
  
  content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});