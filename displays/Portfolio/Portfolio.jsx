import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Portfolio.scss'

import TabTracker from '../../components/TabTracker/TabTracker.jsx'
import Nav from '../../components/Nav/Nav.jsx'
import NavItem from '../../components/Nav/NavItem.jsx'
import Perks from '../TextSections/Perks.jsx'
import Article from '../TextSections/Article.jsx'
import Xplor from '../TextSections/Xplor.jsx'
import SpaceCat from '../TextSections/SpaceCat.jsx'

let portfolioItems = [
  'Perks',
  'Article',
  'XPLOR',
  'SpaceCat'
]

class Portfolio extends Component {

  constructor () {
    super ()
    this.state = ({
      currentTab: 'Perks'
    })
  }

  onTabClick (newTab) {
    console.log(newTab)
    this.setState({
      currentTab: newTab
    })
  }

  render () {
    let portfolioClass = classNames({
      'portfolio': true,
      [`${this.state.currentTab}-active`]: this.state.currentTab
    })
    return (
      <div className={portfolioClass}>
        <Nav orientation='horizontal'>
          {portfolioItems.map((tab, index) => (
            <NavItem
              value={tab}
              key={index}
              isActive={this.state.currentTab === tab}
              onClick={(newTab) => this.onTabClick(newTab)}
            />
          ))}
        </Nav>
        <TabTracker
          totalPositions={portfolioItems.length}
          currentPosition={portfolioItems.indexOf(this.state.currentTab) + 1}
        />
      <div className='perks'>
          <Perks />
        </div>
        <div className='article'>
          <Article />
        </div>
        <div className='xplor'>
          <Xplor />
        </div>
        <div className='spaceCat'>
          <SpaceCat />
        </div>
      </div>
    )
  }
}

export default Portfolio
