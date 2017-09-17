import React from 'react'

import Pie from '../../components/Pie/Pie.jsx'

import './TextSection.scss'

const BackEnd = () => {
  return (
    <div className='bodyText'>
      <div className='language'>
        <div className='languageName'>
          Java
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='ninety' />
        </div>
      </div>
      <div>
        When it comes to most lines of code written, Java definitely takes the cake
        for me by a long shot. Object-Oriented is my favorite method to utilize
        when programming back-end, so it's easy to see why I fell in love with the
        language. I have come a long way, from my first major project creating
        a tanks game my Sophomore year of college to creating the entire back end for
        a web app called article.fm (see portfolio) this summer. Created entirely
        using Java (other than some XML for database purposes), I utilized a Spring
        framework with Maven and JPA to create an efficient, coherent RESTful API.
      </div>
      <div className='language'>
        <div className='languageName'>
          Python
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='seventy' />
        </div>
      </div>
      <div>
        Python is the first language I ever learned, and it had quite an impact on me.
        It was in my intro CS classes where I used python to gain an understanding of
        data structures and algorithms at an intermediate level, upon which I built
        my capabilities with other languages. I have completed a few really cool projects
        using Python, including two of my favorites. One was a&nbsp;
        <a href='https://github.com/lucitez/Connect4'>Connect 4 Game</a> complete with
        some basic AI. Another was a data visualization of concentration of Twitter Phrases
        that I am unfortunately not able to upload on my github.
      </div>
      <div className='language'>
        <div className='languageName'>
          Swift
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='eighty' />
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
