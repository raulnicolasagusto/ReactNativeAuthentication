
import { useAuth } from '@clerk/clerk-expo'
import { Slot, Redirect } from 'expo-router';


// hacemos que si el usuario no esta autenticado, lo redirija a la pantalla de sign-in y no pueda ingresar al home
export default function ProtectedLayout() {
    console.log('ProtectedLayout rendered');
    // Verifica si el usuario está autenticado
    // const { isAuthenticated } = useAuth();
    
    //con CLERK:
    const { isSignedIn } = useAuth();


    if (!isSignedIn) {
      return <Redirect href="/(auth)/sign-in" />;
    }

  return <Slot />;  
} 