import { ErrorResponse, useRouteError } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div>
      <Navbar/>
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