import React from 'react'

import './TextSection.scss'

const Perks = () => {
  return (
    <div>
      <div className='bodyText'>
        While working for Rich Uncles, LLC this summer I helped develop
        v1.0 of the web app for Perks, a local business-focused rewards
        program. The website was built with React using a Redux framework.
        I helped construct and refactor components in a separate repository that
        are throughout the web app. I also contributed to conversations about
        user experience, helping to design flows for onboarding, profile updates,
        and inviting friends to the service.
      </div>
      <img
        className='image'
        src='https://s3-us-west-1.amazonaws.com/lrg.life/images/perks-map.png'
      />
      <div className='bodyText'>
        I loved learning about React and how to use Redux to really take
        advantage of a component’s state. One of my favorite things I contributed
        to the project was a field repeater that automatically creates new fields
        when all of the current fields are filled up.
      </div>
      <img
        className='image'
        src='https://s3-us-west-1.amazonaws.com/lrg.life/images/perks-field-repeater.png'
      />
      <div className='caption'>
        A handy, automatically expanding field repeater I built for inviting friends to Perks
      </div>
    </div>
  )
}

export default Perks
