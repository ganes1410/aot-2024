type RouteConstraints = number | `${number}`
const createRoute = <Route extends RouteConstraints>(author: string, route: Route) => {
  console.log(`[createRoute] route created by ${author} at ${Date.now()}`);
  return route
}
