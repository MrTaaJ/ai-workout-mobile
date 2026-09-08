// import { useUnstableNativeVariable as useUnstableNativeVariableRaw } from "nativewind";

// const useUnstableNativeVariable = useUnstableNativeVariableRaw as (
//   name: string,
// ) => string | undefined;

// const rgb = (hex: string) => {
//   const value = Number.parseInt(hex.slice(1), 16);
//   return `${value >> 16} ${(value >> 8) & 255} ${value & 255}`;
// };

// const themeColorVars = {
//   accent: rgb("--color-accent"),
//   background: rgb("--color-background"),
//   border: rgb("--color-border"),
//   card: rgb("--color-card"),
//   destructive: rgb("--color-destructive"),
//   destructiveForeground: rgb("--color-destructive-foreground"),
//   foreground: rgb("--color-foreground"),
//   input: rgb("--color-input"),
//   inputBorder: rgb("--color-input-border"),
//   muted: rgb("--color-muted"),
//   mutedForeground: rgb("--color-muted-foreground"),
//   overlay: rgb("--color-overlay"),
//   primary: rgb("--color-primary"),
//   primaryForeground: rgb("--color-primary-foreground"),
//   primaryHover: rgb("--color-primary-hover"),
//   ring: rgb("--color-ring"),
//   secondary: rgb("--color-secondary"),
//   secondaryForeground: rgb("--color-secondary-foreground"),
//   tabBackground: rgb("--color-tab-background"),
// };

// export type AppThemeColor = keyof typeof themeColorVars;

// export function useAppThemeColor(color: AppThemeColor) {
//   return useUnstableNativeVariable(themeColorVars[color]) as string | undefined;
// }

import { useColorScheme } from "react-native";

const brand = {
  destructive: "#EF4444",
  destructiveForeground: "#FFFFFF",
  primary: "#2563EB",
  primaryForeground: "#FFFFFF",
  primaryHover: "#1D4ED8",
} as const;

export const appThemeColors = {
  light: {
    ...brand,
    accent: "#EFF6FF",
    background: "#f6f6f6",
    border: "#E2E8F0",
    card: "#FFFFFF",
    tabBackground: "#FFFFFF",
    foreground: "#0F172A",
    input: "#FFFFFF",
    inputBorder: "#E2E8F0",
    muted: "#F1F5F9",
    mutedForeground: "#64748B",
    overlay: "#0F172A",
    ring: "#3B82F6",
    secondary: "#F1F5F9",
    secondaryForeground: "#0F172A",
  },
  dark: {
    ...brand,
    accent: "#2563EB",
    background: "#0B0F19",
    border: "#242C3E",
    card: "#161D2E",
    tabBackground: "#161D2E",
    foreground: "#F8FAFC",
    input: "#161D2E",
    inputBorder: "#2E3750",
    muted: "#1C2436",
    mutedForeground: "#8B94A8",
    overlay: "#000000",
    ring: "#3B82F6",
    secondary: "#1C2436",
    secondaryForeground: "#F1F5F9",
  },
} as const;

export type AppThemeColor = keyof (typeof appThemeColors)["light"];

export function useAppThemeColor(color: AppThemeColor) {
  const colorScheme = useColorScheme();
  return appThemeColors[colorScheme === "dark" ? "dark" : "light"][color];
}
