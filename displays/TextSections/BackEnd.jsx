import React from 'react'

import ProficiencyBar from '../../components/ProficiencyBar/ProficiencyBar.jsx'

import './TextSection.scss'

const BackEnd = () => {
  return (
    <div className='bodyText'>
      <div className='language'>
        <div className='languageName'>
          Java
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='80' />
        </div>
      </div>
      <div>
        When it comes to most lines of code written, Java stands out by a large margin.
        I prefer utilizing object oriented methodologies when
        programming, so it's no surprise I have such an affinity for Java.
        My first major project in Java was a tanks game I created with a team of four
        during my Sophomore year of college. Most recently, I created the back end for
        a web app called article.fm, which you can find out more about in the portfolio
        section of this site.
      </div>
      <div className='language'>
        <div className='languageName'>
          Python
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='70' />
        </div>
      </div>
      <div>
        I have completed a few really cool projects
        using Python, including two of my favorites. One was a&nbsp;
        <a href='https://github.com/lucitez/Connect4' target='_blank'>Connect 4 Game</a> complete with
        some basic AI. Another was a data visualization of concentration of Twitter Phrases
        that I am unfortunately not able to upload on my github due to size limitations.
      </div>
      <div className='language'>
        <div className='languageName'>
          Swift
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='80' />
        </div>
      </div>
      <div>
        I have gained a proficiency in Swift through passion projects of mine. I
        consider myself a strong Swift programmer, having learned through self teaching.
        In my portfolio section, I detail a fun game I built, feel free to check it out!
      </div>
    </div>
  )
}

export default BackEnd
