import React, { createContext, useEffect, useState } from 'react'
import Header from './Component/Header/Header.js'
import Finalstage from './Component/Finalstage/Finalstage.js'
import LoginPage from './Component/Login/LoginPage.js'
import Footer from './Component/foot/Footer.js'
import Topcontainer from './Component/Topcontainer/Topcontainer.js'
import Dashboard from './Component/Dashboard/Dashboard.js'


import axios from "axios";

const MyContext = createContext();

const App = () => {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3004/users/1/").then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])

  return (
    
    <MyContext.Provider value={data}>
   
      <Header/>
      <Finalstage/>

    </MyContext.Provider>
  )
}

export default App