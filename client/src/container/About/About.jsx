import React from 'react'
import {motion} from 'framer-motion'

import './About.scss'
import { images } from '../../constants'
// import { urlFor, client} from '../../client'
import { AppWraper, motionWrap} from '../../Wrappers'


const About = () => {

    const abouts = [
        {
            tittle: 'Backend Development',
            // description: ` I'm a backend developer with a passion for solving complex problems and delivering effective solutions. I have experience working with technologies such as Node.js, Express, and MongoDB, and I excel at building scalable, secure, and efficient server-side applications. I have a strong understanding of server-side scripting, and I'm always seeking to improve my skills and stay current with the latest industry advancements. Whether working on a simple backend service or a complex system, I bring my best to every project and strive to exceed expectations.`,
            description: `💻 When it comes to backend development, I bring a versatile skill set to the table that allows me to build robust and efficient web applications. With a deep understanding of languages like Python, Java, or Node.js, I have the power to create the backbone of digital experiences.

            🌟 Collaborating with popular frameworks such as Django, Spring, or Express.js, I thrive on crafting backend systems that seamlessly handle complex challenges. It's all about shaping the future of technology and leaving a mark on the digital landscape.
            
            🔒 Data security and protection are of utmost importance to me. I have a strong grasp of implementing authentication and authorization mechanisms, ensuring that user information is safeguarded. With every line of code, I prioritize the trust and privacy of our users.
            
            🛠️ Troubleshooting and maintaining system integrity are areas where I excel. I take pride in my ability to debug and resolve complex issues, ensuring smooth operation and minimizing downtime. It's all about providing a reliable and seamless user experience.
            
            📚 Staying updated with the latest industry trends and emerging technologies is an ongoing commitment. The backend field is ever-evolving, and I thrive on continuous learning to enhance my development practices.`,
            imgUrl: images.about02
        },
        {
            tittle: 'React Development',
            // description: `I am a React developer with a passion for crafting user-friendly web experiences. My expertise in JavaScript, HTML, and CSS allows me to turn ideas into polished, functional interfaces. I'm constantly seeking new ways to push the limits of what's possible, always striving to learn and grow as a developer. Whether working on a simple site or a complex application, I bring my best to every project and always aim to deliver outstanding results.`,
            description: `⚛️ As a React developer, I possess a strong command of HTML, CSS, and JavaScript, making me adept at building interactive and engaging user interfaces. Let's bring designs to life and captivate users with visually stunning web applications! 💡🚀

             With a deep understanding of the React framework, I leverage its powerful features to create reusable components and optimize application performance. Let's harness the full potential of React and build cutting-edge applications! 🌟
            
            🔄 Experience with state management libraries like Redux or MobX allows me to efficiently manage and synchronize data across the application, ensuring a smooth and seamless user experience. Let's keep the state in check and create reliable applications! 💪🌐
            
            🎉 React ecosystem is ever-evolving, and I keep up with the latest trends and best practices. From React Hooks to React Router, I stay updated to deliver the most efficient and modern solutions. Let's stay ahead of the curve and push the boundaries of React development! 📚.`,
            imgUrl: images.about01
        },
        {
            tittle: 'Frontend Development',
            // description: ` I'm a frontend developer with a focus on React. I have a passion for creating beautiful and intuitive user interfaces that deliver a great experience. With a strong foundation in JavaScript, HTML, and CSS, I bring ideas to life and make sure that they work seamlessly for users. I'm always looking for ways to improve my skills and stay up-to-date with the latest trends in frontend development. Whether working on a small project or a complex application, I bring my best to every task and strive to exceed expectations.`,
            description: `🎨 When it comes to frontend development, I bring a diverse set of skills to the table that helps me create visually stunning and interactive user interfaces. I have a strong command of HTML5, CSS3, and JavaScript, which allows me to craft engaging and responsive web applications that captivate users. 💻

            🌟 Working with popular frontend frameworks like React, Vue.js, or Angular, I am able to build dynamic and feature-rich interfaces that bring ideas to life. It's truly exciting to see designs come to fruition and create meaningful experiences for users. 🎉
            
            💡 Understanding the importance of aesthetics and usability, I follow UI/UX principles and best practices to design visually appealing and user-friendly interfaces. I believe that an intuitive interface goes a long way in leaving a positive impact on users. 🚀
            
            🔧 Performance optimization is always on my mind, and I leverage efficient coding practices, caching techniques, and asset optimization to ensure fast and smooth frontend experiences. Whether it's desktop or mobile devices, I strive to deliver seamless interactions across all platforms. 📱
            
            🎨 In translating wireframes into pixel-perfect designs, I rely on design tools like Adobe Photoshop or Sketch to bring out the best in each project. Additionally, I value collaboration and efficient code management, using version control systems like Git to streamline teamwork. 🔄
            
            📚 Keeping up with the ever-evolving frontend landscape is crucial, so I stay up-to-date with emerging technologies and trends. It's an ongoing journey of learning and exploring new possibilities, and I'm always excited to expand my skillset 🌟.`,
            imgUrl: images.about03
        },
    ]

  return (
    <div id='About' className='app__about'>
      <h2 className='head-text'>I Know that <span>Good Development</span><br/>means <span>Good Business</span></h2>
      <div className='app__profiles'>
        {abouts.map((about, index)=>(
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.02}}
          transition={{duration:0.5, type: 'tween'}}
          key={about.tittle+index}
          className="app__profile-item"
          >
            <img src={about.imgUrl} alt={about.tittle}/>
            <div>
              <h2 className='bold-text' style={{marginTop:20}} >{about.tittle}</h2>
              <p className='p-text' style={{marginTop:20}} >{about.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWraper(
  motionWrap(About),
  'About',
  'app__whitebg'
  )