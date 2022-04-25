import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import Page from "./components/Main.js/Page";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
        <Route path="/auth" exact component={Auth} />
          <Route path="/" exact component={Home} />
       
          <Route path="/page" exact component={Page} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;