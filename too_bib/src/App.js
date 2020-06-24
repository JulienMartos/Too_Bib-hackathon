import React from "react";
import Header from "./components/Header";
import ListQuiz from "./components/ListQuiz";
import Homepage from "./components/Homepage";
import Brulure from "./components/brulure/Brulure";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/Questionnaires" component={ListQuiz} />
            <Route path="/Questionnaires/brulure" component={Brulure} />
          </main>
        </>
      </Switch>
    </Router>
  );
}

export default App;
