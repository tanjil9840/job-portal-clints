import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails.jsx/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplicatons from "../pages/MyApplications/MyApplicatons";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout> </MainLayout> ,
      children:[
        {
            path:'/',
            element:<Home> </Home>
        },
        {
            path:'/register',
            element:<Register> </Register>
        },
        {
          path:'/signin',
          element:  <SignIn> </SignIn>
        },
        {
          path:'/jobs/:id',
          element: <PrivateRoute> <JobDetails> </JobDetails> </PrivateRoute> ,
          

          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)

        },
        {
          path: '/jobApply/:id',
          element: <PrivateRoute> <JobApply> </JobApply> </PrivateRoute>
        },
        {
          path: '/myApplications',
          element: <PrivateRoute> <MyApplicatons> </MyApplicatons> </PrivateRoute>
        }
      ]
    },
  ]);

  export default router