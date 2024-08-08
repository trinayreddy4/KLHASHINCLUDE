import { useState } from 'react';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import HomeVideo from './assets/HomeVideo.mp4';
import CountdownTimer from './Components/CountDownTimer/CountDownTimer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <header>
        <NavBar />
      </header>
      <div>
        <VideoPlayer srcVideo={HomeVideo} className="w-[100px] h-[100px]" />
      </div>
      <div style={{ backgroundColor: '#000', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CountdownTimer targetDate="2024-12-31T23:59:59" />
    </div>
    </div>
  )
}

export default App
