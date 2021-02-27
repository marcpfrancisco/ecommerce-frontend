import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import LandingPage from "views/LandingPage";
import NavHeader from "components/NavHeader";
import SignInPage from "views/SignIn/SignInPage";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <div className="App">
            <NavHeader />
            <Container>
              <Route exact path="/">
                <LandingPage />
              </Route>
            </Container>

            <Route exact path="/signin">
              <SignInPage />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
