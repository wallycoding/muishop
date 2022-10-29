import React from "react";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import "@fontsource/roboto";

import createEmotionCache from "../utils/createEmotionCache";
import ThemeSelectorProvider from "../providers/ThemeSelectorProvider";

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  emotionCache: EmotionCache;
}

const App: React.FC<CustomAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ThemeSelectorProvider>
      <CacheProvider value={emotionCache}>
        <CssBaseline />
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeSelectorProvider>
  );
};

export default App;
