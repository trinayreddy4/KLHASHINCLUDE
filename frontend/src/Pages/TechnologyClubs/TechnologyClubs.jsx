import React from 'react'
import Card from '../../Components/Card/Card';
import dc from '../../assets/Clubs/dc.jpg';
import Aparmeya from '../../assets/Clubs/Aparmeya.jpg';
// import broadband from '../../assets/Clubs/broadband.jpg';
// import expedite from '../../assets/Clubs/expedite.jpg';
// import garuda from '../../assets/Clubs/garuda.jpg';
// import gsdc from '../../assets/Clubs/gsdc.jpg';
// import intel from '../../assets/Clubs/intel.jpg';
// import kognitiv from '../../assets/Clubs/kognitiv.jpg';
// import mayavi from '../../assets/Clubs/mayavi.jpg';
// import megha from '../../assets/Clubs/megha.jpg';
// import rpa from '../../assets/Clubs/rpa.jpg';
// import sea from '../../assets/Clubs/sea.jpg';
// import socc from '../../assets/Clubs/socc.jpg';
// import sods from '../../assets/Clubs/sods.jpg';
// import trailblazers from '../../assets/Clubs/trailblazers.jpg';
// import whitehat from '../../assets/Clubs/whitehat.jpg';
const TechnologyClubs = () => {
  return (
    <div
        className="w-full h-screen flex justify-center items-center gap-5"
    >
        <Card imageSrc={dc} altText="DC" />
        <Card imageSrc={Aparmeya} altText="Aparmeya" />
        {/* <Card imageSrc={broadband} altText="Broadband" />
        <Card imageSrc={expedite} altText="Expedite" />
        <Card imageSrc={garuda} altText="Garuda" />
        <Card imageSrc={gsdc} altText="GSDC" />
        <Card imageSrc={intel} altText="Intel" />
        <Card imageSrc={kognitiv} altText="Kognitiv" />
        <Card imageSrc={mayavi} altText="Mayavi" />
        <Card imageSrc={megha} altText="Megha" />
        <Card imageSrc={rpa} altText="RPA" />
        <Card imageSrc={sea} altText="SEA" />
        <Card imageSrc={socc} altText="SOCC" />
        <Card imageSrc={sods} altText="SODS" />
        <Card imageSrc={trailblazers} altText="Trailblazers" />
        <Card imageSrc={whitehat} altText="Whitehat" /> */}
        
    </div>
  )
}

export default TechnologyClubs