import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { paths } from "./path";
import Invoice from "../pages/Invoice";
import Searchpage from "../components/Searchpage";
const Category = lazy(() => import("../pages/Category"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Detail = lazy(() => import("../pages/Detail"));
const Routes = () => {
  const fallback = (
    <p className=" flex h-screen items-center justify-center">loading...</p>
  );
  const router = createBrowserRouter([
    {
      path: paths.Login,
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
      path: paths.Detail,
      element: (
        <Suspense fallback={fallback}>
          <Detail />
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
    {
      path: paths.Invoice,
      element: (
        <Suspense>
          <Invoice />
        </Suspense>
      ),
    },
    {
      path: paths.Search,
      element: (
        <Suspense>
          <Searchpage />
        </Suspense>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
