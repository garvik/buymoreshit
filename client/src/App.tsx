import React, { Suspense } from "react";
import "./App.css";

import TopNavigation from "./TopNavigation";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routeCofigs } from "./routes/routes";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Container } from "@material-ui/core";

const fallback = <LinearProgress />;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={fallback}>
        <TopNavigation />
        <Container component="main">
          <Switch>{renderRoutes(routeCofigs)}</Switch>
        </Container>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
