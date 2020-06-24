import React from "react";
import Header from "./components/Header";
import ListQuiz from "./components/ListQuiz";
import Homepage from "./components/Homepage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <main>
            <Route exact path="/" component={Homepage} />
            <Route path="/Questionnaire" component={ListQuiz} />
          </main>
        </>
      </Switch>
    </Router>
  );
}

export default App;
