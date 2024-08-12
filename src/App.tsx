import {Component} from "preact";

import Header from "./components/Header/Header";
import Router from "./router";

import "./styles/index.styl";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Router />
            </>
        );
    }
}

export default App;