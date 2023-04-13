import React,{useEffect, useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import "react-tooltip/dist/react-tooltip.css";
import {motion} from 'framer-motion'
import {CircularProgress} from '@mui/material'

import { AppWraper, motionWrap } from '../../Wrappers'
import './Work.scss'

const Work = () => {

  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState( []);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchProjects = async () =>{
      setIsLoading(true);
      try {
        const response = await fetch('https://sp-tem0.onrender.com/api/v1/posts',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
  
        if(response.ok){
          const result = await response.json();
          setFilterWork(result.data)
          setWorks(result.data)
        } else {console.log('this is error')}
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false);
    }
    
    fetchProjects();
    // useState(()=>{
    //   setFilterWork(works)
    // })
  },[])
  


  
const handleWorkFilter = (item) =>{
  setActiveFilter(item);
  setAnimateCard([{y: 100, opacity: 0}]);

  setTimeout(() => {
    setAnimateCard([{y: 0, opacity: 1}])
    
    if(item === 'All'){
      setFilterWork(works);
    } else{
      setFilterWork(works.filter((works)=> works.tags.includes(item)))
    }
  }, 500);
}

  return (
    <div className='app__work'>      <h2 className='head-text'>My Creative <span>Profolio</span> Section</h2>
      <div className='app__work-filter'>
        {['All','UI/UX', 'Web App', 'Mobile App','React JS',].map((item,index)=>(
          <div
          key={index}
          onClick={()=> handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      
      <motion.div
      animate={animateCard}
      transition={{duration: 0.5, delayChildren: 0.5}}
      className="app__work-portfolio"
      >{isLoading ? (
        <CircularProgress/>
      ): (
          <>
            {filterWork.length ? 
              <>
                {filterWork?.map((work,index)=> (
                  <div className='app__work-item app__flex' key={index}>
                    <div className='app__work-img app__flex'>
                      <img src={work.image} alt={work.title} />
                      <motion.div
                      // whileHover={{opacity:[0,1]}}
                      transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
                      className="app__work-hover app__flex app__work-hover_hover"
                      >
                        <a href={work.live} target='_blank' rel="noreferrer">
                          <motion.div
                          whileHover={{scale: [1,0.9]}}
                          transition={{duration: 0.25}}
                          className='app__flex app__work-hover_hover'
                          >
                            <AiFillEye />
                          </motion.div>
                        </a>
                        <a href={work.github} target='_blank' rel="noreferrer">
                          <motion.div
                          whileHover={{scale: [1,0.9]}}
                          transition={{duration: 0.25}}
                          className='app__flex'
                          >
                            <AiFillGithub/>
                          </motion.div>
                        </a>
                      </motion.div>
                    </div>
                    <div className='app__work-content app__flex'>
                      <h4 className="bold-text">{work.title}</h4>
                      <p className="p-text" style={{marginTop: 10 }}>{work.description}</p>
                      <div className="app__work-tag app__flex">
                        <p className="p-text">{work.tags[1]}</p>
                      </div>
                    </div>
                  </div>
                ))} 
              </>: (
                <>
                  <h2 className='head-text'>Coming Soon<span>....</span></h2>
                </>
              )
            }
          </>
        )}
      </motion.div>

    </div>
  )
}

export default AppWraper(
  motionWrap(Work),
  'Work',
  'app__primarybg'
  )