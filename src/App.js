import './App.css';
import Header from './pages/SharedPage/Header/Header';
import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/SharedPage/NotFound/NotFound';
import Footer from './pages/SharedPage/Footer/Footer';
import Home from './pages/Home/Home/Home';

export const DisplyNameContext = createContext("")

function App() {
  const [displyName, setDisplyName] = useState("")

  return (
    <DisplyNameContext.Provider value={[displyName, setDisplyName]}>
      <div className="App">
        <Toaster></Toaster>
        <Header></Header>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

        <Footer></Footer>

      </div>
    </DisplyNameContext.Provider>
  )
}

export default App
