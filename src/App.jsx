import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import MenuDetails from './components/MenuDetails/MenuDetails';

function App() {
  const router = createHashRouter([
    {path:"" , element:<Layout/> , children:[
      {index:true , element:<Home/>},
      {path:"menu" , element:<Menu/>},
      {path:"MenuDetails/:id" , element:<MenuDetails/>},
      {path:"about" , element:<About/>},
      {path:"contact" , element:<Contact/>},
      {path: "*" , element:<NotFoundPage />},
  
    ]}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
