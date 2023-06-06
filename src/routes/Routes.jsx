import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
const Category = lazy(() => import ('../pages/Category'))
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Routes = () => {
    const fallback = <p className=" flex h-screen items-center justify-center">loading...</p>
  const router = createBrowserRouter([
    {
      path:paths.Login,
      element: (
        <Suspense fallback={fallback}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: paths.Register,
      element: (
        <Suspense fallback={fallback}>
          <Register />
        </Suspense>
      ),
    },
    {
      path: paths.Home,
      element: (
        <Suspense fallback={fallback}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: paths.Category,
      element: (
        <Suspense fallback={fallback}>
          <Category />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <NotFound />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
