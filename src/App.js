import './App.css';
import Header from './pages/SharedPage/Header/Header';
import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/SharedPage/NotFound/NotFound';
import Footer from './pages/SharedPage/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import CheckOut from './pages/CheckOut/CheckOut';
import RequireAuth from './pages/SharedPage/RequireAuth/RequireAuth';

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
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/checkOut' element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

        <Footer></Footer>

      </div>
    </DisplyNameContext.Provider>
  )
}

export default App
