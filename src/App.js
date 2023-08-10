import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/product/components/ProductList';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import { createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom";
import CheckOut from './pages/CheckOut';
import ProductDetailPage from './pages/ProductDetailPage';

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
    element: (<CartPage></CartPage>),
  },
  {
    path: "/checkout",
    element: (<CheckOut></CheckOut>),
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage></ProductDetailPage>),
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
