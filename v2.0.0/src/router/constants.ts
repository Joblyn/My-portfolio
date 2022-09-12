interface RouteConfig {
  path: string;
  name: string;
}

const HOME: RouteConfig = {
  path: "/",
  name: "home",
};

const ARTICLES: RouteConfig = {
  path: "/articles",
  name: "articles",
};

export { HOME, ARTICLES };
