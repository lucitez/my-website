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
        Before the summer of 2017, front end was a bit of a mystery to me. However,
        it didn’t take long for me to fall in love, thanks to React. I began by taking a few
        online courses but eventually just dove into the codebase for perks.work
        (see Portfolio) guided by an engineer working on the project. This summer
        is the only experience I have with React, but I spent more than half of my time
        immersed in the language, and developed a strong grasp of its strengths and
        weaknesses. This website was built using React.
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
        it comes to animations.
      </div>
    </div>
  )
}

export default FrontEnd
