import {createBrowserRouter, RouterProvider} from "react-router-dom"

import { AppLayout } from "./components/Layout/AppLayout"
import Home from "./pages/Home"
import Login from "./components/Authentication/Login.jsx"
import SignUp from "./components/Authentication/SignUp.jsx"
import { Cards } from "./components/Cards/Cards.jsx"
import { Contact } from "./pages/Contact"
import Feedback from "./pages/Feedback";
import { About } from "./pages/About"
import { ErrorPage } from "./pages/ErrorPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<ErrorPage />,
    children:[
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/about",
        element:<About />,
      },
      {
        path: "/cards",
        element:<Cards />,
      },
      {
        path: "/contact",
        element:<Contact />,
      },
      { 
        path: "/feedback", 
        element: <Feedback /> }, 
    ]
  }],
  { basename: "/byte-plus-plus/" } 
)

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App
