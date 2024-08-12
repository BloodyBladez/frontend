import Menu from "../pages/Home/Menu";
import Character from "../pages/Character/Character";

export default [
    {
        path: '/',
        element: <Menu />
    },
    {
        path: '/characters',
        element: <Character />
    }
];