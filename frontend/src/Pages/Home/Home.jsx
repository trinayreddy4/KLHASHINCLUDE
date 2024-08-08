import React from 'react'
import AboutHome from '../../Components/AboutHome/AboutHome';
import HomeImageMarquee from '../..//Components/HomeImageMarquee/HomeImageMarquee';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import HomeVideo from '../../assets/HomeVideo.mp4';
import CountdownTimer from '../../Components/CountDownTimer/CountDownTimer';

const Home = () => {
  return (
    <div>
        <div>
            <VideoPlayer srcVideo={HomeVideo} className="w-[100px] h-[100px]" />
        </div>
        <div style={{ backgroundColor: '#000', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CountdownTimer targetDate="2024-12-31T23:59:59" />
        </div>
        <div>
            <AboutHome/>
        </div>
        <div>
            <HomeImageMarquee/>
        </div>
    </div>
  )
}

export default Home