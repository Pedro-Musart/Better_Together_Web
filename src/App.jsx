import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

export default function () {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
