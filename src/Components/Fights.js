import React from 'react'
import './Fights.css'
function Fights() {
  return (
    <div className='detail-wrapper'>
      <h3><b>:- Number Of Fights:80</b></h3>
      <span><b>:- Total Wins:70</b></span>
      <span><b>:- Total Losses:10</b></span>
      <div className='forms'>
        <span><b>:- Top Form: Mastered Ultra Instinct</b></span>
        <img className='goku-san' src="https://wallpaperboat.com/wp-content/uploads/2021/04/23/76706/goku-ultra-instinct-08.jpg" alt="goku" />
      </div>
      <div className='pDetails'>
        <h2>Origin</h2>
        <span>:- Goku was born in planet vegeta( universe 7) and when he was a kid his father sent him to planet Earth in order to save from Frieza</span>
        <span>  ,Goku fought numerous battels and saved planet earth countless times</span>
      </div>
    </div>
  )
}

export default Fights
