import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Page1 from './pages/page1/page1'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/Page1' index element = {<Page1/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


