
import { useAuth } from '@/providers/AuthProvider';
import { Slot, Redirect } from 'expo-router';
import { AuthProvider } from '@/providers/AuthProvider';

// hacemos que si el usuario no esta autenticado, lo redirija a la pantalla de sign-in y no pueda ingresar al home
export default function ProtectedLayout() {
    console.log('ProtectedLayout rendered');
    // Verifica si el usuario está autenticado
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <Redirect href="/(auth)/sign-in" />;
    }

  return <Slot />;  
} 