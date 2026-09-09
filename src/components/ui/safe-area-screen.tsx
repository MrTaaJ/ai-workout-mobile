import { cn } from "@/lib/utils";
import { useAppThemeColor } from "@/theme/app-theme";
import { ComponentProps } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaScreenProps = ComponentProps<typeof SafeAreaView>;

export default function SafeAreaScreen({
  className,
  ...props
}: SafeAreaScreenProps) {
  const backgroundColor = useAppThemeColor("background");

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor }}
      className={cn(className)}
      {...props}
    />
  );
}
