import { Component } from "preact";

import {
    ProfileContext,
    ProfileManager,
    HostContext,
    HostManager
} from "@managers";
import { Header, Router } from "@components";

import "./styles/index.styl";

class App extends Component {
    componentDidMount() {
        HostManager.load();
        ProfileManager.load();
    }

    render() {
        return (
            <HostContext.Provider value={HostManager}>
                <ProfileContext.Provider value={ProfileManager}>
                    <Header />
                    <Router />
                </ProfileContext.Provider>
            </HostContext.Provider>
        );
    }
}

export default App;
