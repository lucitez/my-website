import React from 'react'

import Pie from '../../components/Pie/Pie.jsx'

import './TextSection.scss'

const FrontEnd = () => {
  return(
    <div className='bodyText'>
      <div className='language'>
        <div className='languageName'>
          React
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='ninety' />
          </div>
        </div>
      <div>
        During the summer of 2017, I went from avoiding front end web programming
        to building my own website from scratch. This change was thanks to my
        constant exposure to React this summer. I assisted the lead front end
        engineer while working on a project called Perks, which you can find out
        more about in the portfolio section. This summer
        is the only experience I have with React, but I spent more than half of my time
        immersed in the language, and developed a strong grasp of its strengths and
        weaknesses.
      </div>
      <div className='language'>
        <div className='languageName'>
          Redux
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='fifty' />
        </div>
      </div>
      <div>
        My exposure to React Redux was somewhat limited, but that exposure really
        helped me understand the benefits of utilizing actions and reducers. Redux
        allows for easier testing, especially when using it with helpful plugins like
        Chrome's Redux plugin.
      </div>
      <div className='language'>
        <div className='languageName'>
          HTML
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='eighty' />
        </div>
      </div>
      <div>
        I've known a bit about how to use HTML since I began my CS career back in
        High School, but only really began to develop a strong understanding of it
        this summer. Since then, I've been increasing my level of skill by using HTML
        within my JSX code.
      </div>
      <div className='language'>
        <div className='languageName'>
          CSS / Sass
        </div>
        <div className='proficiency'>
          proficiency:
          <Pie percentage='ninety' />
        </div>
      </div>
      <div>
        I have been honing my CSS skills over the past year or so and seen a significant
        amount of improvement in my capabilities. Since learning about Sass, I've
        never looked back. It takes all of the confusing, poorly structured aspects
        of CSS and makes things much easier to work with. I am also a believer
        that CSS is very underrated in the creative opportunities it unlocks when
        it comes to things like animations.
      </div>
    </div>
  )
}

export default FrontEnd
