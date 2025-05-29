import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/register',
            Component: Register
        },
        {
          path: 'jobApply/:id',
          element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
        },
        {
          path: 'myApplications',
          element: <PrivateRoutes><MyApplications></MyApplications></PrivateRoutes>
        },
        {
          path: '/jobs/:id',
          Component: JobDetails,
          loader: ({params}) =>  fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: '/signIn',
            Component: SignIn
        },
    ]
  },
]);

export default router;