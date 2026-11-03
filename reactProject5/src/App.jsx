import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Page1 from './pages/page1/page1'
import Page2 from './pages/page2/page2'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/Page1' index element = {<Page1/>}/>
            <Route path='/Page2' index element = {<Page2/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}


