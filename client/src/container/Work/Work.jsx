import React,{ useState , useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import "react-tooltip/dist/react-tooltip.css";
import {motion} from 'framer-motion'
import {CircularProgress} from '@mui/material'
import {IoLogoJavascript} from 'react-icons/io'
import {FaNode, FaReact} from 'react-icons/fa6'
import {SiExpress, SiMongodb, SiTypescript} from 'react-icons/si'

import { AppWraper, motionWrap } from '../../Wrappers'
// import { Dalle, GPT, HooBank, Memories, Sumz, Yariga } from '../../assets/workImg'
import './Work.scss'

// const works = [
//   {
//     image: Yariga,
//     title: 'Yariga',
//     live: 'https://yariga-sp.netlify.app',
//     github: 'https://github.com/Saurabh-1SP/Yariga',
//     description: 'This MERN Stack website is for Sales or Renting properties, it has a dashboard, profiles, agents, login functions, etc. On this website, you can create properties to sell or rent you need to log in.',
//     tags: ['All','React JS','Web App'],
//     tech: ['React','JS','TypeScript','Node', 'Express', 'MongoDB',]
//   },
//   {
//     image: GPT,
//     title: 'GPT',
//     live: 'https://gtp3-sp.netlify.app',
//     github: 'https://github.com/Saurabh-1SP/GPT3',
//     description: 'I fond figma design for chapgpt website. So i made responsive desing using reactjs',
//     tags: ['All','UI/UX','React JS'],
//     tech: ['React','JS']
//   },
//   {
//     image: Dalle,
//     title: 'Dalle',
//     live: 'https://dalle-sp.netlify.app/',
//     github: 'https://github.com/Saurabh-1SP/Dall-e',
//     description: 'This website is the clone of the Dalle so it has all features like dalle. And i also add community area where people can watch other images and prompt, they can post there imagaes.There is search bar to search prompt or images.',
//     tags: ['All','React JS','Web App'],
//     tech: ['React','JS','Node', 'Express', 'MongoDB',]
//   },
//   {
//     image: HooBank,
//     title: 'Hoo Bank',
//     live: 'https://hoo-bank-sp.netlify.app/',
//     github: 'https://github.com/Saurabh-1SP/Hoo-bank',
//     description: 'This the responsive design of the hoo-bank.',
//     tags: ['All','React JS','UI/UX'],
//     tech: ['React','JS']
//   },
//   {
//     image: Memories,
//     title: 'Memories',
//     live: 'https://memories-sp.netlify.app/',
//     github: 'https://github.com/Saurabh-1SP/Memories',
//     description: "It's the website where people post memorable memories so that they can share them with other. It has Like, Delete, Post, Edit, etc. with a responsive design for all devices. People can LogIN and LogOUT with Google or default. Did I meItion that it has Recommend feature also and More Features are coming soon...",
//     tags: ['All','React JS','Web App'],
//     tech: ['React','JS','Node', 'Express', 'MongoDB',]
//   },
//   {
//     image: Sumz,
//     title: 'Article Summarizer AI',
//     live: 'https://sumz-sp.netlify.app/',
//     github: 'https://github.com/Saurabh-1SP/sumz',
//     description: 'This website takes the link of the article that you want to summarize and summarizes the article using the gpt-4. It has a history of the articles that are summarized and click-to-copy links of the articles. And with the modern UI/UX.',
//     tags: ['All','React JS'],
//     tech: ['React','JS','Node']
//   },
// ]
const Work = () => {

  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [isLoading,setIsLoading] = useState(false);



  useEffect(() => {
    const fetchProjects = async () =>{
      setIsLoading(true);

      try {
        const response = await fetch('https://sp-tem0.onrender.com/projects',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })

      //Local server
      
      // try {
      //   const response = await fetch('http://localhost:8080/projects',{
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     }
      //   })
  
        if(response.ok){
          const result = await response.json()
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
    <div className='app__work'>      <h2 className='head-text'>My <span>Websites</span></h2>
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
                        <div className='app__work_badge-container'>
                          {work?.tech.map((tech)=>(
                            <div className="app__work-badge app__flex">
                              {tech === 'JS' ? <IoLogoJavascript /> : tech === 'React' ? <FaReact/> : tech === 'Node' ? <FaNode/> : tech === 'Express' ? <SiExpress/> : tech === 'MongoDB' ? <SiMongodb/> : tech === 'TypeScript' ? <SiTypescript/> : ''}
                            </div>
                          ))}
                        </div>
                        <h4 className="bold-text">{work.title}</h4>
                        <p className="p-text" style={{marginTop: 10,overflowY: 'scroll' }}>{work.description}</p>
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