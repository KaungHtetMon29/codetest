import Home from 'pages/Home'
import Auth from 'pages/auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth /> }
  ])
  return <RouterProvider router={router} />
}

export default App
