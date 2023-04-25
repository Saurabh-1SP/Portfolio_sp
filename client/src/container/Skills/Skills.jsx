import React, { useState } from 'react'
import "react-tooltip/dist/react-tooltip.css";
import {motion} from 'framer-motion'
import {CircularProgress} from '@mui/material'

import { AppWraper, motionWrap } from '../../Wrappers'
import './Skills.scss'
import { html, javascript,css, sass, nodejs, express, redux, mongodb, mui, react } from '../../assets/skillImg';

const Skills = () => {

  const [isLoading] = useState(false)
  const skills = [
    {
      name: 'React',
      image: react
    },
    {
      name: 'JavaScript',
      image: javascript
    },
    {
      name: 'HTML',
      image: html
    },
    {
      name: 'CSS',
      image: css
    },
    {
      name: 'SASS',
      image: sass
    },
    {
      name: 'Node JS',
      image: nodejs
    },
    {
      name: 'Express JS',
      image: express
    },
    {
      name: 'Redux',
      image: redux
    },
    {
      name: 'MongoDB',
      image: mongodb
    },
    {
      name: 'MUI',
      image: mui
    },
  ]
  
    // const [skills, setSkills] = useState([]);

    // useEffect(() => {
    //   const fetchProjects = async () =>{
    //     setIsLoading(true);
    //     try {
    //       const response = await fetch('https://sp-tem0.onrender.com/api/v1/skills',{
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         }
    //       })
    
    //       if(response.ok){
    //         const result = await response.json();
    //         setSkills(result.data)
    //       } else {console.log('this is error')}
    //     } catch (error) {
    //       console.log(error)
    //     }
    //     setIsLoading(false);
    //   }
      
    //   fetchProjects();
    // },[])
    
  return (
    <div>
      <h2 className=' head-text'>
        Skills
      </h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {isLoading ? <CircularProgress/> : 
            <>
              {skills.map((skill,index) =>(
                <motion.div
                whileInView={{opacity: [0,1]}}
                transition={{duration: 0.5}}
                className='app__skills-items app__flex'
                key={skill.name+index}
                >
                  <div className='app__flex'>
                    <img src={skill.image} alt={skill.name}/>
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </>
          }
        </motion.div>


        {/* <motion.div className='app__skills-exp'>
          {experience.map((experiences,index)=>(
            <motion.div
            className='app__skills-exp-item'
            key={experiences.year+index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experiences.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                    <motion.div whileInView={{opacity: [0,1]}}
                      transition={{duration: 0.5}}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={experiences.work.name}
                      key={experiences.work.name+index}
                        >
                      <h4 id={experiences.work.name} className="bold-text" > {experiences.work.name}</h4>
                      <p className="p-text">{experiences.work.company}</p>
                  </motion.div>
                    <Tooltip anchorId={experiences.work.name}
                    content={experiences.work.desc}
                    />
                </motion.div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </div>
  )
}

export default AppWraper(
  motionWrap(Skills),
  'Skills',
  'app__whitebg'
  )