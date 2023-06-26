import Header from './components/Header'
import Body from './components/Body'
import React from 'react'
import { Provider } from 'react-redux'
import store from './components/utiles/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchVideo from './components/WatchVideo'


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>,
      },
      {
        path:"watch",
        element:<WatchVideo/>
      }
    ]
  }
])




const App = () => {
  return (
    <Provider store={store}>
    <div className="">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default App

