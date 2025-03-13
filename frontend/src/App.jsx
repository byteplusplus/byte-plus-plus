import {createBrowserRouter, RouterProvider} from "react-router-dom"

import { AppLayout } from "./components/Layout/AppLayout"
import { About } from "./pages/About"
import { Cards } from "./pages/Cards/Cards.jsx"
import { Contact } from "./pages/Contact"
import Home from "./pages/Home"
import { ErrorPage } from "./pages/ErrorPage"
import Feedback from "./pages/Feedback"; // Import Feedback Page


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
