import './App.css';
import Header from './pages/Home/Header/Header';
import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/SharedPage/NotFound/NotFound';

export const DisplyNameContext = createContext("")

function App() {
  const [displyName, setDisplyName] = useState("")

  return (
    <DisplyNameContext.Provider value={[displyName, setDisplyName]}>
      <div className="App">
        <Toaster></Toaster>
        <Header></Header>
        <Routes>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      </div>
    </DisplyNameContext.Provider>
  )
}

export default App
