import { ScrollRestoration } from "react-router";
import { JSX } from "react/jsx-runtime";

function App(params: {page: JSX.Element}) {

  return (
    <>
      {params.page}
      <ScrollRestoration />
    </>
  );
}

export default App;
