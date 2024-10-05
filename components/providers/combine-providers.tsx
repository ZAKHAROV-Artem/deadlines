import { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";

import RTKProvider from "./rtk-provider";
import TamaguiProvider from "./tamagui-provider";

type CombipeProvidersProps = {
  children: ReactNode;
};
export default function CombipeProviders({ children }: CombipeProvidersProps) {
  return (
    <RTKProvider>
      <TamaguiProvider>
        <StatusBar backgroundColor="transparent" style="dark" translucent />
        {children}
      </TamaguiProvider>
    </RTKProvider>
  );
}
