import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { BrowserRouter } from 'react-router'
// import { createBrowserRouter, RouterProvider} from 'react-router'
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";


// const router = createBrowserRouter([
//   {path:"/" , element:<Home />},
//   {path:"/about" , element:<About />},
//   {path:"/contact" , element:<Contact />},
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <BrowserRouter> */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
)
