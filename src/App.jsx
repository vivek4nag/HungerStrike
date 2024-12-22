
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import QuotePage from './components/Quote/QuotePage'
import RestaurantPage from './components/Restaurant/RestaurantPage'

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path :"/Quote",
      element: <QuotePage/>
    },
    {
      path:"/Restaurant",
      element: <RestaurantPage/>
    }
  ])

  return (
    <div className='select-none'>
      <RouterProvider router={appRouter}/>
    
    </div>
  )
}

export default App
