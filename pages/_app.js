import "../styles/globals.css";
import BaseLayout from "../layout/base";
import { ThemeProvider } from "../context/theme-context";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default MyApp;
