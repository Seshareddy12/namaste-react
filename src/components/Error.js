import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error Page</h1>
      <div>
        {err.status} - {err.statusText}
      </div>
    </div>
  );
};

export default Error;
