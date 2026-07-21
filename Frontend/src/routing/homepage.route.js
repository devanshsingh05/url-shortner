import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree.js";
import HomePage from "../pages/HomePageNew";

export const homePageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage ,
});
