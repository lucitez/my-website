import React from 'react'

import './TextSection.scss'

const Xplor = () => {
  return (
    <div className='textContainer'>
      <div className='bodyText'>
        Throughout the past year, I worked on a culminating project, known as
        Senior Design, for my University's Computer Science Program. The project is a mobile
        application focused on allowing users to organize trips and track their
        progress as they complete a trip. My team and I built the front end
        using React Native, and used Google Firebase to host our database. Below
        are some demos of different features in the app.
      </div>
      <div className='xplorGif'>
        <img className='gif' src='../assets/xplor-signin.gif' />
        <div className='feature'>
          <div className='header'>
            Login Flow
          </div>
          <div className='bodyText'>
            Users may create new accounts manually by creating a username and password.
            Alternatively, they may create a count by linking Facebook, Twitter, or
            Google accounts to the app. Then, they can log in through third party
            authentication or by typing in thier username and password. Our user
            authentication is handled through firebase authentication.
          </div>
        </div>
      </div>
      <div className='xplorGif'>
        <div className='feature'>
          <div className='header'>
            Creating Trips
          </div>
          <div className='bodyText'>
            When a user is creating a trip, they must provide a trip name, tags, and
            privacy settings. Tags exist to allow other users to find your trip, and
            privacy settings limit who can see your trips. From there, add locations
            by searching or directly through the map.
          </div>
        </div>
        <img className='gif' src='../assets/xplor-createtrip.gif' />
      </div>
      <div className='xplorGif'>
        <img className='gif' src='../assets/xplor-search.gif' />
        <div className='feature'>
          <div className='header'>
            Search Feature
          </div>
          <div className='bodyText'>
            Users can tap on the search icon on the upper right hand side of the
            screen to search for points of interest, other users, and trips. Tapping
            on a POI result will center the map on that point. Tapping on a user
            will bring you to their profile page. Tapping on a tag will bring you to
            a screen with all trips containing that tag.
          </div>
        </div>
      </div>
      <div className='xplorGif'>
        <div className='feature'>
          <div className='header'>
            Adding POIs
          </div>
          <div className='bodyText'>
            If a certain location doesn't exist in our database, users can add them.
            Users can drop a pin at the center of a map, and they will be provided
            with a list of locations that are around that pin. These locations are
            filterable by category, and will only appear if they exist in Google's
            Places API. This is to avoid spam location adding.
          </div>
        </div>
        <img className='gif' src='../assets/xplor-addpoi.gif' />
      </div>
      <div className='xplorGif'>
        <img className='gif' src='../assets/xplor-jointrip.gif' />
          <div className='feature'>
            <div className='header'>
              Join Trips
            </div>
            <div className='bodyText'>
              The application is social, so you can follow users and participate
              in collaborative trips with your friends. Following a user allows
              you to see their trips that have a privacy setting of followers only.
              Following a trip allows you to see the trip on your profile, but you can't
              edit or track progress. Joining a trip grants you the same control over
              the trip as if you created it yourself, but must be approved by the trip's
              creator.
            </div>
          </div>
      </div>
      <div className='caption'>
        The github for this project can be found at &nbsp;
        <a href='https://github.com/explr-bucknell/explr' target='_blank'>xplr-bucknell</a>
        .
      </div>
    </div>
  )
}

export default Xplor
