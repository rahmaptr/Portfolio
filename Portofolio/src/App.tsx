import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider"
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";

const BrowserRouter = createBrowserRouter([{ element: <Root />, errorElement: <ErrorPage />, children: [{ path: "/", element: <Home/> }] }])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={BrowserRouter} />
    </ThemeProvider>
  )
}

export default App
