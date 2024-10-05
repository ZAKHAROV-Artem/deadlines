import { ReactNode } from "react";
import { PortalProvider } from "tamagui";
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
        <PortalProvider shouldAddRootHost>{children}</PortalProvider>
      </TamaguiProvider>
    </RTKProvider>
  );
}
