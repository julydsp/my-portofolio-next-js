import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Montserrat as MontserratFont } from "@next/font/google";

const montserrat = MontserratFont({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className={montserrat.variable}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
