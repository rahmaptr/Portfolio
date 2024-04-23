import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Projects from "./routes/projects";
import { useState } from "react";
import { ArrowContext } from "./contexts/arrow-context";
import Skills from "./routes/skills";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/skills", element: <Skills /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

function App() {
  const [showUpArrow, setShowUpArrow] = useState(false);
  return (
    <ArrowContext.Provider value={{ showUpArrow, setShowUpArrow }}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ArrowContext.Provider>
  );
}

export default App;
