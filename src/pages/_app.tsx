import type { AppProps } from "next/app";
import { RootProvider } from "@/providers/RootProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}
