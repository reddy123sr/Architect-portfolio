import './App.css'
import BioSection from './components/Bio'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Contact from './components/Contact'
import About from './components/About'
import ResumePage from './components/Resume'
import LoginPage from './components/LoginPage'
import ProjectDetails from './components/ProjectDetails'
import InteriorDetails from './components/InteriorDetails'
import ExteriorDetails from './components/ExteriorDetails'

const router=createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[
    {
      path:"/",
      element:<BioSection/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/resume",
      element:<ResumePage/>
    },
    {
      path:"/login",
      element:<LoginPage/>
    },
    {
      path:"/projects/:id",
      element:<ProjectDetails/>
    },
    {
      path:"/interior",
      element:<InteriorDetails/>
    },
    {
      path:"/exterior",
      element:<ExteriorDetails/>
    },
  ]
}])
function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App;
