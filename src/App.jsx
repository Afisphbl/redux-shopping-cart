import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AppRouter } from "./router/AppRouter";
import { useSelector } from "react-redux";
import { themeSelector } from "./features/themeSelector";
import { useEffect } from "react";

function App() {
  const theme = useSelector(themeSelector);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <article className="app">
      <BrowserRouter>
        <Navbar theme={theme} />
        <main className="app-main">
          <AppRouter />
        </main>
      </BrowserRouter>
    </article>
  );
}

export default App;
