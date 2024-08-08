import { useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import RoutesConfig from './Configurations/RoutesConfig';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <header className='
          w-full
      '>
        <NavBar />
      </header>
      <main>
        <RoutesConfig/>
      </main>
      <div className='
      w-full
      flex
      justify-center
      items-center
      p-5
      '>
        <Footer/>
      </div>
     
    </div>
  )
}

export default App
