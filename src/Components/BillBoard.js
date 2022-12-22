import React, { useState } from 'react'
import goku from '../Assests/goku.jpg'
import './BillBoard.css'
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Popup from './Popup';
import Popup2 from './Popup2';

import './Popup.css'
function BillBoard() {

    const[popup,setPopup]=useState(false)
    const[popup2,setPopup2]=useState(false)

    function handlePopup(){
        setPopup(pre=>!pre)
    }
    function handlePopup2(){
        setPopup2(pre=>!pre)
    }

  return (
    <div className='card'>
     <img  className='goku-pic' src={goku} alt="" />
     <h1 className='goku'>Goku</h1>
     <div className='stats'>
         <SportsMmaIcon style={{fontSize:"3rem" , cursor:"pointer"}} className='fights' onClick={handlePopup}  />
            {popup&&<Popup handlePopup={handlePopup} />}
         <QueryStatsIcon style={{fontSize:"3rem",cursor:"pointer"}} className='fight'   onClick={handlePopup2} />
         {popup2&&<Popup2 handlePopup2={handlePopup2} style={{fontSize:"3rem" , cursor:"pointer"}} onClick={handlePopup2}/>}
    </div>
    <div className='about'>
        <h3>About</h3>
        <p>Son Goku (孫そん悟ご空くう Son Gokū, Japanese pronunciation: sõŋgokɯː), born Kakarot (カカロット Kakarotto, Japanese pronunciation: [kakaɾot̚to]), is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. </p>
    </div>
    <div className='ideal'>
        <h3>Ideals</h3>
        <p>"No, see, I don't think of it like I'm saving the world. The fact is, it's because I'm usually trying to challenge the strongest warriors I can find. That's how this tournament happened, too. But I can't bear the thought of innocent lives getting wiped out just because I want to fight the best. So, I'll do what I can for them."</p>
    </div>
    <div className='icons'>
        <InstagramIcon style={{marginLeft:"20px"}}/>
        <FacebookIcon style={{marginLeft:"20px"}}/>
        <TwitterIcon style={{marginLeft:"20px"}}/>
        <YouTubeIcon style={{marginLeft:"20px"}}/>
    </div>
    </div>
  )
}

export default BillBoard
