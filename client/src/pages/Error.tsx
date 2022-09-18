import { FunctionComponent } from "react";
import notFound from "../assets/images/not-found.svg";
import { Link } from "react-router-dom";
import { ErrorWrapper } from "../components/wrappers/ErrorWrapper";

export const Error404: FunctionComponent = () => {
  return (
    <ErrorWrapper className="full-page">
      <div>
        {" "}
        <img src={notFound} alt="not found" />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </ErrorWrapper>
  );
};
