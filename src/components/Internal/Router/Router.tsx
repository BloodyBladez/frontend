import {Route, Switch} from "wouter-preact";
import routes from "../../../data/routes";

export const Router = () => (
    <Switch>
        {routes.map(({ path, element }) =>
            <Route path={path}>
                {element}
            </Route>
        )}
    </Switch>
);