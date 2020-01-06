import React from "react";
import { RouteConfig } from "react-router-config";

const Home = React.lazy(() => import("./Home"));
const Create = React.lazy(() => import("./Create"));

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/create",
    component: Create
  }
];

export default routes;
