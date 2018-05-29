import React from 'react'

import Icon from '../../components/Icon/Icon.jsx'

import './TextSection.scss'

const AboutMe = () => {
  return (
    <div>
      <div className='portrait'>
        <img
          src='https://s3-us-west-1.amazonaws.com/lrg.life/images/My+Face.jpg'
          className='portrait-image'
        />
      </div>
      <div className='bodyText'>
        Hi there, thanks for visiting my site! I am a recent graduate from
        Bucknell University, majoring in Computer Science and Engineering.
        I'm from Los Angeles, California.
        I have a passion for front end development, though I have experience
        across the stack. Keep looking around to find out more about me,
        enjoy! You can find all the code for this website&nbsp;
        <a href='https://github.com/lucitez/my-website' target='_blank'>
          here
        </a>
        .
        <br />
      </div>
        <br />
      <div className='bodyText'>
        I like to spend my free time playing
        and watching soccer, listening to music, and watching movies and cartoons.
      </div>
      <div className='links'>
        <a href='https://www.linkedin.com/in/lucas-gregory-02b9b7aa/' target='_blank'>
          <Icon name='linkedin' size='md' type='link'/>
        </a>
        <a href='https://github.com/lucitez' target='_blank'>
          <Icon name='github' size='md' type='link'/>
        </a>
        <div className='email'>
          my email: lrg006@bucknell.edu
        </div>
      </div>
    </div>
  )
}

export default AboutMe
