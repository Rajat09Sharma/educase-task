import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayout } from "./Pages/RootLayout"
import { LandingPage } from "./Pages/LandingPage"
import { LoginPage } from "./Pages/LoginPage"
import { SignupPage } from "./Pages/SignupPage"
import { ProfilePage } from "./Pages/ProfilePage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/profile",
        element: <ProfilePage />
      }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
