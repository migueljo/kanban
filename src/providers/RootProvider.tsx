import "@fontsource/plus-jakarta-sans/300.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "../app/globals.css";

import React from "react";
import { DarkModeProvider } from "./DarkModeProvider";

type RootProviderProps = {
  children: React.ReactNode;
};

export const RootProvider = ({ children }: RootProviderProps) => {
  return <DarkModeProvider>{children}</DarkModeProvider>;
};
