import React from 'react'
import './Popup2.css'
import CloseIcon from '@mui/icons-material/Close';
import Stats from './Stats';
import { motion } from 'framer-motion';
function Popup({handlePopup2}) {
    // const[popup,setPopup]=useState(false)
  return (
    <motion.div initial={{opacity:0.4}}  animate={{opacity:1,transition:{duration:1.5}}}  className='modal'>
        <div className='overlay'>
            <div className='modal-content2'>
        <Stats/>
        <CloseIcon  style={{color:"black",fontSize:"2.2rem",marginTop:"10px",cursor:"pointer",backgroundColor:"black",color:"white"}} className='cross' onClick={handlePopup2}/>
            </div>
        </div>
    </motion.div>
  )
}

export default Popup