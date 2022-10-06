import React from 'react'
import Shop from './components/shop/Shop'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Review from './pages/review/Review'
import Inventory from './pages/inventory/Inventory'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>,
      children:[
        {
          path:'/',
          element: <Shop/>
        },
        {
          path:'/review',
          element:<Review/>
        },
        {
          path:'/inventory',
          element:<Inventory/>
        }
      ]
    }
  ])
  return (
    <>
      <main>
        <RouterProvider router={router}/>
      </main>
    </>
  )
}

export default App
