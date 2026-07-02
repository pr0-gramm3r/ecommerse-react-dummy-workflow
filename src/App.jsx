import './App.css'
import Notify from "./components/Notify"
import Cart from './components/Cart'
import Lang from './components/Lang'
import Login from './components/Login'
import Card from './components/Card'
import Theme from "./components/theme"
import { useEffect, useState } from 'react'
import ThemeContext from './context/ThemeContext'
import NotifyContext from './context/NotifyContext'

const products = [
  {
    id: 1,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 750 g",
    rating: 4.3,
    reviews: "10k",
    current: 200,
    past: 999,
    discount: "80% off",
  },
  {
    id: 2,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 425 g",
    rating: 4.1,
    reviews: "6.2k",
    current: 129,
    past: 499,
    discount: "74% off",
  },
  {
    id: 3,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 1.2 kg",
    rating: 4.6,
    reviews: "18.4k",
    current: 349,
    past: 1499,
    discount: "77% off",
  },
  {
    id: 4,
    img: "https://www.bbassets.com/media/uploads/p/l/40119524_1-amul-happy-treats-french-fries.jpg",
    name: "Amul Happy Treats French Fries, 250 g",
    rating: 3.9,
    reviews: "2.8k",
    current: 79,
    past: 299,
    discount: "73% off",
  },
];


const App = () => {
  
  const [theme, setTheme] = useState("light");
  const [msg_no, setMsg_no] = useState(1);

  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme);
  },[theme]);

  return (
    <>    
      <div className="top">
        <div className="left">
          <ThemeContext.Provider value={{theme, setTheme}}>
            <Theme />
          </ThemeContext.Provider>
        </div>
        <div className="right">
          <NotifyContext.Provider value={{msg_no, setMsg_no}}>
          <Notify />
          </NotifyContext.Provider>
          <Cart />
          <Lang />
          <Login />
        </div>
      </div>
      <div className="main">
        <NotifyContext.Provider value={{msg_no, setMsg_no}}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
        </NotifyContext.Provider>

      </div>
    </>
  )
}

export default App
