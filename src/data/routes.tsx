import Menu from "../pages/Home/Menu";
import Profile from "../pages/Profile/Profile";
import Battle from "../pages/Battle/Battle";
import Character from "../pages/Character/Character";

export default [
    {
        path: '/',
        element: <Menu />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/battle',
        element: <Battle />
    },
    {
        path: '/characters',
        element: <Character />
    }
];