import { Component } from "preact";
import { Route, Switch } from "wouter-preact";
import { routes } from "@data";

export class Router extends Component {
    render() {
        return (
            <Switch>
                {routes.map(({ path, element }) => (
                    <Route path={path}>{element}</Route>
                ))}
            </Switch>
        );
    }
}
