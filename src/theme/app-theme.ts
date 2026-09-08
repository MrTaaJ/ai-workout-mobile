import { useUnstableNativeVariable } from "nativewind";

const themeColorVars = {
  accent: "--color-accent",
  background: "--color-background",
  border: "--color-border",
  card: "--color-card",
  destructive: "--color-destructive",
  destructiveForeground: "--color-destructive-foreground",
  foreground: "--color-foreground",
  input: "--color-input",
  inputBorder: "--color-input-border",
  muted: "--color-muted",
  mutedForeground: "--color-muted-foreground",
  overlay: "--color-overlay",
  primary: "--color-primary",
  primaryForeground: "--color-primary-foreground",
  primaryHover: "--color-primary-hover",
  ring: "--color-ring",
  secondary: "--color-secondary",
  secondaryForeground: "--color-secondary-foreground",
  tabBackground: "--color-tab-background",
};

export type AppThemeColor = keyof typeof themeColorVars;

export function useAppThemeColor(color: AppThemeColor) {
  return useUnstableNativeVariable();
}
