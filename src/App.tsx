import {useEffect} from "preact/hooks";

import {HostContext, HostManager} from "./managers/host";
import {ProfileContext, ProfileManager} from "./managers/profile";
import {Header, Router} from "@";

import "./styles/index.styl";

const App = () => {
    useEffect(() => {
        HostManager.load();
        ProfileManager.load();
    }, []);

    return (
        <>
            <Header />
            <HostContext.Provider value={HostManager}>
                <ProfileContext.Provider value={ProfileManager}>
                    <Router />
                </ProfileContext.Provider>
            </HostContext.Provider>

        </>
    );
}

export default App;