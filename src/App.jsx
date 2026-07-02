import './App.css'
import Theme from "./components/theme"
import Notify from "./components/Notify"
import Cart from './components/Cart'
import Lang from './components/Lang'
import Login from './components/Login'
import Card from './components/Card'

const App = () => {
  return (
    <>    
      <div className="top">
        <div className="left">
          <Theme />
        </div>
        <div className="right">
          <Notify />
          <Cart />
          <Lang />
          <Login />
        </div>
      </div>
      <div className="main">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
