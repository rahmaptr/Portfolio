import { ErrorResponse, useRouteError } from "react-router-dom";
import Footer from "./components/Footer";
import { ModeToggle } from "./components/mode-toggle";

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div>
      <ModeToggle />
      <h1>Something went wrong</h1>
      {error.status === 404 ? (
        <h2>The page you're looking for doesn't exist</h2>
      ) : (
        null
      )}
      <Footer/>
    </div>
  );
}

export default ErrorPage;