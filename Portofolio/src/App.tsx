import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Root from "./routes/root";
import ErrorPage from "./error-page";

const BrowserRouter = createBrowserRouter([{ path: "/", element: <Root />, errorElement: <ErrorPage />}])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={BrowserRouter} />
    </ThemeProvider>
  )
}

export default App
