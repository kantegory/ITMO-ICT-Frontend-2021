import {
    CREATE_PLACE_ROUTE, BOOKINGS_ROUTE,
    RESET_PASSWORD_ROUTE,
    HOME_PAGE_ROUTE,
    PLACE_DETAIL_ROUTE, PROFILE_ROUTE,

} from "../utils/Consts";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import HomePage from "../pages/HomePage";
import PlaceCreate from "../pages/PlaceCreate";
import PlaceDetail from "../pages/PlaceDetail";
import BookingsPage from "../pages/BookingsPage";
import ProfiePage from "../pages/ProfiePage";


export const publicRoutes = [
    {path: HOME_PAGE_ROUTE, element: <HomePage/>},
    {path: RESET_PASSWORD_ROUTE, element: <ResetPasswordPage/>},
    {path: PLACE_DETAIL_ROUTE, element: <PlaceDetail/>},
]


export const privateRoutes = [
    {path: HOME_PAGE_ROUTE, element: <HomePage/>},
    {path: CREATE_PLACE_ROUTE, element: <PlaceCreate/>},
    {path: PLACE_DETAIL_ROUTE, element: <PlaceDetail/>},
    {path: BOOKINGS_ROUTE, element: <BookingsPage/>},
    {path: PROFILE_ROUTE, element: <ProfiePage/>},
]



