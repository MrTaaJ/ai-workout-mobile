import "@/global.css";
import { authClient } from "@/lib/auth-client";
import { getStatusBarStyle } from "@/lib/utils";
import { useAppThemeColor } from "@/theme/app-theme";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Feather, FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Platform, useColorScheme, View } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...Feather.font,
    ...FontAwesome.font,
    ...FontAwesome6.font,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const colorScheme = useColorScheme();

  const pathname = usePathname();
  const scheme = colorScheme ?? "light";
  const backgroundColor = useAppThemeColor("background");

  // UPDATE: helper method to determine the style value
  const statusBarStyle = getStatusBarStyle(
    pathname,
    scheme as "light" | "dark",
  );

  const { data: session, isPending } = authClient.useSession();

  const [appReady, setAppReady] = useState(false);

  const fontReady = loaded || !!error;

  useEffect(() => {
    if (!appReady && fontReady && !isPending) {
      SplashScreen.hideAsync().then(() => setAppReady(true));
    }
  }, [isPending, appReady, fontReady]);

  if (!appReady) return null;

  return (
    <KeyboardProvider>
      <View
        style={{
          backgroundColor,
          flex: 1,
        }}
      >
        {Platform.OS === "ios" && <StatusBar animated style={statusBarStyle} />}
        <Stack
          screenOptions={{
            headerShown: false,
            //USE: Stack controls Android; expo-status-bar above controls iOS.
            ...(Platform.OS === "android" && { statusBarStyle }),
          }}
        >
          <Stack.Protected guard={!session}>
            <Stack.Screen name="(public)" />
          </Stack.Protected>
          <Stack.Protected guard={!!session}>
            <Stack.Screen name="(app)" />
          </Stack.Protected>
        </Stack>
      </View>
    </KeyboardProvider>
  );
}
