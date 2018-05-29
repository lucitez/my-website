import React from 'react'

import './TextSection.scss'

const Article = () => {
  return (
    <div className='textContainer'>
      <div className='bodyText'>
        Another project I worked on while working at Rich Uncles was article.fm.
        It’s a platform for the
        aggregation and organization of articles pulled from multiple sources
        across the web. Here’s the twist - rather than displaying the articles
        to be read by the consumer, it is instead converted to audio and played
        for them, providing a unique, hands and eyes-free experience.
      </div>
      <img
        className='image'
        src='https://s3-us-west-1.amazonaws.com/lrg.life/images/article-feed.png'
      />
      <div className='bodyText'>
        I built this web app from the ground up, developing both client and server side,
        using RESTful practices and
        a springboot framework. I used a number of libraries to help crawl and
        scrape articles (crawler4j and Jsoup respectively), and AWS to convert
        articles from text to SSML to audio. I used Java and mysql to create the
        backend, and ReactJS for the front end, keeping mobile responsiveness
        in mind.
      </div>
      <div className='image-container'>
        <img
          className='image-mobile'
          src='https://s3-us-west-1.amazonaws.com/lrg.life/images/article-mobile.png'
        />
      </div>
      <div className='caption'>
        article.fm on a mobile screen.
      </div>
    </div>
  )
}

export default Article
