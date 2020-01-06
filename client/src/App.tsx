import React, { Suspense } from "react";
import "./App.css";

import TopNavigation from "./TopNavigation";
import { BrowserRouter, Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/routes";
import LinearProgress from "@material-ui/core/LinearProgress";

const fallback = <LinearProgress />;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={fallback}>
        <TopNavigation />
        <Switch>{renderRoutes(routes)}</Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
