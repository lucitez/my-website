import React from 'react'

import ProficiencyBar from '../../components/ProficiencyBar/ProficiencyBar.jsx'

import './TextSection.scss'

const FrontEnd = () => {
  return(
    <div className='bodyText'>
      <div className='language'>
        <div className='languageName'>
          React
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='90' />
          </div>
        </div>
      <div>
        During the summer of 2017, I went from understanding the basics of HTML and CSS
        to building this website from scratch. This change was thanks to my
        constant exposure to React this summer. I assisted the lead front end
        engineer while working on a project called Perks, which you can find out
        more about in the portfolio section. I spent the better part of four months
        training my web development skills, and have become a confident web programmer.
      </div>
      <div className='language'>
        <div className='languageName'>
          Redux
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='50' />
        </div>
      </div>
      <div>
        I learned Redux after gaining a proficiency using React. Using Redux, I have gained
        a stronger understanding of how state should work in a React project, and best
        practices for managing said state using Redux's actions and reducers.
      </div>
      <div className='language'>
        <div className='languageName'>
          HTML
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='70' />
        </div>
      </div>
      <div>
        My experience using vanilla HTML is limited, but an understanding of how
        certain tags work, especially the more complex and frequently used ones such
        as form, is important when using any JavaScript framework.
      </div>
      <div className='language'>
        <div className='languageName'>
          CSS / Sass
        </div>
        <div className='proficiency'>
          <ProficiencyBar percentage='90' />
        </div>
      </div>
      <div>
        I have been honing my CSS skills over the past year or so and seen a significant
        amount of improvement in my capabilities. My ability to apply my knowledge of CSS
        was boosted when I learned about the preprocessor SCSS, which has been incredibly
        helpful in increasing the readibility and structure of a CSS page. I have also taken
        the time to learn about CSS animations, which can make a user feel more welcome and
        encourage user interaction.
      </div>
    </div>
  )
}

export default FrontEnd
