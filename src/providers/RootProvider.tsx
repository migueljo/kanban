import "../app/globals.css";
import React from "react";
import { DarkModeProvider } from "./DarkModeProvider";

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
