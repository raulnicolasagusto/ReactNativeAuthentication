
import { Redirect, Slot, Stack } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

export default function AuthLayout() {
  console.log('AuthLayout rendered');
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Si el usuario ya está autenticado, redirige al home
    console.log('User is authenticated, no puedes volver a ingresar al sign-in');
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="sign-in" options={{ headerShown: false, title: 'Sign In' }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false, title: 'Sign Up' }} />
    </Stack>
  );

  
}

