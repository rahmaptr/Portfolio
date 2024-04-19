import { ErrorResponse, useRouteError } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function ErrorPage() {
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div>
      <Navbar/>
      <div className="p-5 h-[90vh] flex flex-col justify-center align-middle">
      <h1>Something went wrong</h1>
      {error.status === 404 ? (
        <h4>The page you're looking for doesn't exist</h4>
      ) : (
        null
      )}
      </div>
      <Footer/>
    </div>
  );
}

export default ErrorPage;