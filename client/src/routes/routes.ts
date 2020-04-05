import React from "react";
import { RouteConfig } from "react-router-config";

const Home = React.lazy(() => import("./Home"));
const Create = React.lazy(() => import("./Create"));

export const routePaths = {
  home: "/",
  create: "/create",
};

export const routeCofigs: RouteConfig[] = [
  {
    path: routePaths.home,
    component: Home,
    exact: true,
  },
  {
    path: routePaths.create,
    component: Create,
  },
];
