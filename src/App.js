import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product-list/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Cart from './features/cart/Cart';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cartpage from './pages/Cartpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <Home></Home> ),
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>),
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>),
  },
  {
    path: "/cart",
    element: (<Cartpage></Cartpage>),
  },
]);










function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
       {/* <LoginPage></LoginPage> */}
       {/* <SignupPage></SignupPage> */}
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
