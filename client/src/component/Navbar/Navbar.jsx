import React,{useState} from 'react'
import { HiBriefcase, HiChat, HiHome, HiLightBulb, HiMenuAlt4, HiPhone, HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { IoIosSunny,IoIosMoon } from "react-icons/io";

import './Navbar.scss'
import {images} from '../../constants'
import {themeChange} from '../../utils/theme'

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const handleTheme = () => {
    themeChange(darkmode,setDarkmode)
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.SaurabhLogo} alt="logo" />
        {/* <img src={images.pasi} alt="" /> */}
      </div>
      <ul className='app__navbar-links'> 
        {['Home' , 'About', 'Work', 'Skills', 'Contact' ].map((items,index)=>(
          <li key={`link-${items}${index}`}
          className=' app__flex p-text'>
            <a href={`#${items}`} className='app__flex p-text'>
              <p>{items}</p>
              <div className='navicons_container'>
                {items === 'Home' ? <HiHome/> : items === 'About' ? <HiChat/> : items === 'Contact' ? <HiPhone/> : items === 'Work' ? <HiBriefcase/> : items === 'Skills' && <HiLightBulb/>}
              </div>
            </a>
          </li>
        ))}
      </ul>
      <div onClick={handleTheme}>
        {darkmode ? <IoIosMoon cursor='pointer' size={25} color='#6b7688' /> : <IoIosSunny cursor='pointer' size={25} color='#858df4' />}
      </div>
      {/* <button onClick={()=>themeChange(darkmode,setDarkmode)}>Dark</button> */}
      <div className="app__navbar-menu">
          {/* <HiMenuAlt4 onClick={()=> setToggle(true)} /> */}

          {toggle ? (
            <motion.div
            whileInView={{ x:[300, 0]}}
            transition={{duration:0.85,ease: 'easeOut'}}
            >
              <HiX onClick={()=> setToggle(false)}/>
              <ul > 
          {['Home' , 'About', 'Work', 'Skills', 'Contact'].map((items,index)=>(
            <li key={`link-${items}${index}`} onClick={()=> setToggle(false)}
            className=' app__flex p-text'>
              <a href={`#${items}`}>{items}</a>
            </li>
          ))}
          </ul>
              </motion.div>
            ): (
                <HiMenuAlt4 onClick={()=> setToggle(true)} />
            )

            }
      </div>
    </nav>
  )
}

export default Navbar