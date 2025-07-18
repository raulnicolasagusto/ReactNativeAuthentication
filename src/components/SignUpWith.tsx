import React, { useCallback, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import { useSSO } from '@clerk/clerk-expo'
import { View, Button } from 'react-native'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { de } from "zod/locales";
import CustomButton from "./CustomButton";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Preloads the browser for Android devices to reduce authentication load time
    // See: https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      // Cleanup: closes browser when component unmounts
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

// Handle any pending authentication sessions
WebBrowser.maybeCompleteAuthSession()

export default function SignUpWith() {
    useWarmUpBrowser();


      // Use the `useSSO()` hook to access the `startSSOFlow()` method
  const { startSSOFlow } = useSSO()

  const onGooglePress = useCallback(async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: 'oauth_google',
                redirectUrl: AuthSession.makeRedirectUri(),
            });
            if (createdSessionId) {
                setActive!({ session: createdSessionId });
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, []);

    const onFacebookPress = useCallback(async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: 'oauth_facebook',
                redirectUrl: AuthSession.makeRedirectUri(),
            });
            if (createdSessionId) {
                setActive!({ session: createdSessionId });
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, []);

    const onApplePress = useCallback(async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({
                strategy: 'oauth_apple',
                redirectUrl: AuthSession.makeRedirectUri(),
            });
            if (createdSessionId) {
                setActive!({ session: createdSessionId });
            }
        } catch (err) {
            console.error(JSON.stringify(err, null, 2));
        }
    }, []);

    return (
        <>
            <CustomButton
                text="Sign in with Google"
                onPress={onGooglePress}
                icon={<FontAwesome name="google" size={24} color="#4285F4" style={{ marginRight: 8 }} />}
            />
            <CustomButton
                text="Sign in with Facebook"
                onPress={onFacebookPress}
                icon={<FontAwesome name="facebook" size={24} color="#3b5998" style={{ marginRight: 8 }} />}
            />
            <CustomButton
                text="Sign in with Apple"
                onPress={onApplePress}
                icon={<MaterialCommunityIcons name="apple" size={24} color="#000" style={{ marginRight: 8 }} />}
            />
        </>
    );
}