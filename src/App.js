import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import LandingPage from "views/LandingPage";
import NavHeader from "components/NavHeader";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <NavHeader />
          <Container>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Container>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
