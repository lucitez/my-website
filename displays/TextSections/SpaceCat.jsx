import React from 'react'

import './TextSection.scss'

const SpaceCat = () => {
  return (
    <div>
      <div className='bodyText'>
        Space Cat (working title) is a passion project of mine that I began in May
        of 2017. It’s an iOS app programmed entirely using Swift on XCode. It’s
        a friendly game where the user’s goal is to keep the cat above the bottom
        of the screen, avoiding platforms/barriers and picking up jetpack fuel
        to help gain any ground lost.
      </div>
      <div className='catImages'>
        <img className='catImage'
          src='https://s3-us-west-1.amazonaws.com/lrg.life/images/space-cat-1.png'
        />
        <img className='catImage'
          src='https://s3-us-west-1.amazonaws.com/lrg.life/images/space-cat-2.png'
        />
        <img className='catImage'
          src='https://s3-us-west-1.amazonaws.com/lrg.life/images/space-cat-3.png'
        />
      </div>
      <div className='bodyText'>
        My favorite part of this project was using photoshop to create the bit
        art for everything you see on the screen (aside from the pause button
        and score counter). I unfortunately didn’t get the chance to put the
        game on the app store becuase my internship began midway through
        the process.
      </div>
    </div>
  )
}

export default SpaceCat
