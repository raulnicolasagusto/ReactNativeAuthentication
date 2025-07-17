import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";


const AuthContext = createContext({
    isAuthenticated: false,
    signIn: () => {},
    signOut: () => {}
});

export const AuthProvider = ({  children }: PropsWithChildren) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);

    useEffect(() => {
      const checkAuthentication = async () => {
        // Simulate an authentication check (e.g., API call)
         await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsAuthenticated(true);
      };
      checkAuthentication();
    }, []);

    const signIn = () => {
        setIsAuthenticated(true);
    };

    const signOut = () => {
        setIsAuthenticated(false);
    }


    //pantalla de carga para evitar que se renderice el contenido antes de que se haya verificado la autenticación
    //tener en cuenta que el useState debe ser de tipo boolean o undefined para poder mostrar el ActivityIndicator
    if (isAuthenticated === undefined) {
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
        );
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext)