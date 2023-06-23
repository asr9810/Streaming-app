import Header from './components/Header'
import Body from './components/Body'
import React from 'react'
import { Provider } from 'react-redux'
import store from './components/utiles/store'




const App = () => {
  return (
    <Provider store={store}>
    <div className="">
      <Header/>
      <Body/>
    </div>
    </Provider>
  )
}

export default App

