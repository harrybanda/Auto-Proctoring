import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Verify from "./pages/Verify";
import Exam from "./pages/Exam";
import Submit from "./pages/Submit";
import Register from "./pages/Register";
import ExamOver from "./pages/ExamOver";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

library.add(faMicrophone);

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/:id" component={Verify} />
        <Route exact path="/exam/:id" component={Exam} />
        <Route exact path="/submit/:id" component={Submit} />
        <Route exact path="/examover/:id" component={ExamOver} />
      </Switch>
    </Router>
  );
}
