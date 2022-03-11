import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import HotelResevePage from "../components/HotelResevePage";
import HotelProfilePage from "../components/HotelProfilePage";


export const privateRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/profile', component: Profile, exact: true},
    {path: '/profile/reserve/:id', component: HotelProfilePage, exact: true},
    {path: '/hotels/:id', component: HotelResevePage, exact: true},
]

export const publicRoutes = [
    {path: '/', component: Home, exact: true},
    {path: '/login', component: Login, exact: true},
    {path: '/register', component: Register, exact: true},
]