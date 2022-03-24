import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./components/SignupPage/Signup";

function App() {
  const state = useSelector((state) => state.userReducer);
  let redirectToUrl;
  if (state.user === null) {
    redirectToUrl = <Redirect to="/" />;
  }

  return (
    <div>
      <NavBar />
      {redirectToUrl}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/signup" />
        </Route>
        {state.user && <Route exact path="/home" component={Home} />}
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
