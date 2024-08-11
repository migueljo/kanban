import React from "react";
import { ColorModeProvider } from "./ColorModeProvider";

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
  return <ColorModeProvider>{children}</ColorModeProvider>;
};
