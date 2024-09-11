import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import EstateDetails from "../pages/estate-details";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<Home />} path="/" />
        <Route element={<EstateDetails />} path="/details" />
      </Switch>
    </BrowserRouter>
  );
}
