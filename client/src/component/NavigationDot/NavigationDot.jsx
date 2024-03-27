/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const NavigationDot = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Home' , 'About', 'Work', 'Skills','Contact' ].map((items,index)=>(
            <a 
            href={`#${items}`}
            key={items+index}
            className='app__navigation-dot'
            style={active === items ? {backgroundColor: '#313BAC'}: {}}
            />
        ))}
    </div>
  )
}

export default NavigationDot