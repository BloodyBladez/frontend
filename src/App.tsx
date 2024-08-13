import {useEffect} from "preact/hooks";

import {ProfileContext, ProfileManager} from "./managers/profile";
import Header from "./components/Header/Header";
import Router from "./components/Internal/Router/Router";

import "./styles/index.styl";

const App = () => {
    useEffect(() => ProfileManager.load(), []);

    return (
        <>
            <Header />
            <ProfileContext.Provider value={ProfileManager}>
                <Router />
            </ProfileContext.Provider>
        </>
    );
}

export default App;