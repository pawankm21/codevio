import "../styles/globals.css";
import BaseLayout from "../layout/base";
import { ThemeProvider } from "../context/theme-context";
import { SocketProvider } from "../context/socket-context";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SocketProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </SocketProvider>
    </ThemeProvider>
  );
}

export default MyApp;
