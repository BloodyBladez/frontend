import {Component} from "preact";

import Header from "./components/Header/Header";
import Router from "./components/Internal/Router/Router";

import {ProfileContext, ProfileManager} from "./managers/profile";

import "./styles/index.styl";

class App extends Component {
    constructor() {
        super();
        ProfileManager.load();
    }

    render() {
        return (
            <>
                <Header />
                <ProfileContext.Provider value={ProfileManager}>
                    <Router />
                </ProfileContext.Provider>
            </>
        );
    }
}

export default App;