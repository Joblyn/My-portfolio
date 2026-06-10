import { RouteConfig } from "@/interfaces/route";

const HOME: RouteConfig = {
  path: "/",
  name: "home",
};

const BLOG: RouteConfig = {
  path: "/blog",
  name: "blog",
};

const ARTICLES: RouteConfig = {
  path: "/articles",
  name: "articles",
};

export { HOME, BLOG, ARTICLES };
