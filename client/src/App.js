import React from 'react'
<<<<<<< HEAD
=======

>>>>>>> 87e8b5aa488b0c03f218689acdab6a18620c6e91
import { Header,About,Work,Skills,Testimonials,} from './container';
import { Navbar } from './component'

import './app.scss'                     

const App = () => {

  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      {/* <Footer/> */}
    </div>
  )
}

export default App;