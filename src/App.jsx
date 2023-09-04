/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';

// loader
import { loader as landingLoader } from './pages/Landing';
import { loader as singleProductLoader } from './pages/SingleProduct';
import { loader as productLsoader } from './pages/Products';
import { ErrorElement } from './components';
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';

// actions
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as checkoutAction } from './components/CheckoutForm';
import { store } from './store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: ErrorElement,
        },
        {
          path: 'products',
          element: <Products />,
          loader: productLsoader,
          errorElement: ErrorElement,
        },
        {
          path: 'products/:id',
          element: <SingleProduct />,
          loader: singleProductLoader,
          errorElement: ErrorElement,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
          loader: checkoutLoader(store),
          action: checkoutAction(store),
        },
        {
          path: 'orders',
          element: <Orders />,
          loader: ordersLoader(store),
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
      action: loginAction(store),
      errorElement: <Error />,
    },
    {
      path: '/register',
      element: <Register />,
      action: registerAction,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
