import React from 'react'
import './Popup.css'
import Fights from './Fights';
import CloseIcon from '@mui/icons-material/Close';
import {AnimatePresence, motion} from 'framer-motion'
function Popup({handlePopup}) {
    // const[popup,setPopup]=useState(false)
  return (
    <AnimatePresence>
    <motion.div initial={{opacity:0.4,border:"5 solid red"}}  animate={{opacity:1,transition:{duration:1.5}}}  className='modal'>
        <div className='overlay'>
            <div className='modal-content'>
        <Fights/>
        <CloseIcon style={{color:"black",fontSize:"2.2rem",marginTop:"10px",cursor:"pointer",backgroundColor:"black",color:"white"}} className='cross' onClick={handlePopup}/>
            </div>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Popup
