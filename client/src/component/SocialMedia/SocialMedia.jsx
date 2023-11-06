import React from 'react'
// import { BsTwitter, BsInstagram,} from 'react-icons/bs'
// import {FaFacebookF,} from 'react-icons/fa'

import { images } from '../../constants'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div><a href="https://www.freelancer.com/u/saurabhpasi1" target='_blank' rel="noreferrer"><img src={images.freelancer} alt='freelancer' /></a>  </div>
        <div> <a href="https://www.upwork.com/freelancers/~01682612f2d0ecad7e" target='_blank' rel="noreferrer"><img src={images.upwork} alt='upwork'/></a> </div>
<<<<<<< HEAD
        <div> <a href="https://github.com/Saurabh-1SP" target='_blank' rel="noreferrer"><img src={images.github} alt='upwork'/></a> </div>
=======
>>>>>>> 87e8b5aa488b0c03f218689acdab6a18620c6e91
        {/* <div> <BsInstagram/> </div> */}
    </div>
  )
}

export default SocialMedia