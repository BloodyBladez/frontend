import Menu from "../pages/Home/Menu";
import Profile from "../pages/Profile/Profile";
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
        path: '/characters',
        element: <Character />
    }
];