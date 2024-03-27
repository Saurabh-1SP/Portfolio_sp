import React,{useState} from 'react'

import { images } from '../../constants'
import {AppWraper , motionWrap} from '../../Wrappers'
import './Footer.scss'


const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  // const handleChangeInput = (e) => {
  //   const {name, value} = e.target;

  //   setFormData({...formData, [name]: value})
  // }

  const handleChangeInput = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    if(formData){
        setLoading(true);
        try {
          const response = await fetch('https://sp-tem0.onrender.com/message',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          })
          await response.json();
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
          setIsFormSubmitted(true)
        }
      }
      else{
        alert('please enter a all fields')
      }
  }

//   const handleSubmit = () => {
//     const contact = {
//       _type: 'contact',
//       name: name,
//       email: email,
//       message: message
//     }
//     setLoading(true);

//     client.Create(contact)
//   .then(() => {
//     setLoading(false);
//     setIsFormSubmitted(true);
//   })
//   .catch(error => {
//     console.error('Error creating contact:', error);
//     setLoading(false);
//   });

//   }

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:saurabhpasi.sp@gmail.com" className='p-text'>saurabhpasi.sp@gmail.com</a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="" className='p-text'></a>
        </div> */}
      </div>
      
      {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input type="email" className='p-text' placeholder='Your E-mail' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          value={message}
          name='message'
          onChange={handleChangeInput}
          />
        </div>
        <button className="p-text" type='button' onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      :
        <div>
        <h3 className="head-text">Thanks for getting in the Touch</h3>
      </div> 
        }
      
    </>
  )
}

export default AppWraper(
  motionWrap(Footer,'app__footer'),
  'Contact',
  'app__primarybg'
)