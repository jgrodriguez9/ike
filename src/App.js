import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Suspense fallback="loading">
            <Route path="/sign-up" component={SignUp} />
            <PrivateRoute path="/" component={Dashboard} />            
          </Suspense>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
