import { Battle, Menu, NotFound, Profile } from "@pages";

export const routes = [
    { path: "/", element: <Menu /> },
    { path: "/profile", element: <Profile /> },
    { path: "/battle", element: <Battle /> },
    { path: undefined, element: <NotFound /> }
];
