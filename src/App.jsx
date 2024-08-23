import { RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
 } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import AddUserPage from "./pages/AddUserPage"
import UserPage from "./pages/UserPage"
import PageNotFound from "./pages/PageNotFound"
import EditUserPage from "./pages/EditUserPage"

function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/add-user" element={<AddUserPage/>}/>
      <Route path="/users/:id" element={<UserPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="/edit-user/:id" element={<EditUserPage/>}/>
    </Route>
  )
 )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
