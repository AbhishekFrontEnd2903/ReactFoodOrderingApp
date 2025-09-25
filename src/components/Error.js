import { useRouteError } from "react-router-dom";

const Error = () => {
  const res = useRouteError();
  console.log(res);
  return (
    <div>
      <h1>this is error page</h1>
      <h2>{res.status}</h2>
      <h2>{res.statusText}</h2>
      {/* <h2>{res.error.message}</h2> */}
    </div>
  );
};
export default Error;
