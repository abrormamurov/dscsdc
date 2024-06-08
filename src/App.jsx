import { Home, HeadPhones, Speakers, EarPhones, Checkout } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import { loader as HomeLoader } from "./pages/Home";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/",
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/headphones",
          element: <HeadPhones />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/speakers",
          element: <Speakers />,
        },
        {
          path: "/earphones",
          element: <EarPhones />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
