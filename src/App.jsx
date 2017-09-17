import React, { Component } from 'react'
import classNames from 'classnames'

import NavItem from '../components/Nav/NavItem.jsx'
import Nav from '../components/Nav/Nav.jsx'
import Icon from '../components/Icon/Icon.jsx'
import IconGroup from '../components/IconGroup/IconGroup.jsx'
import Pie from '../components/Pie/Pie.jsx'
import Portfolio from '../displays/Portfolio/Portfolio.jsx'
import FrontEnd from '../displays/TextSections/FrontEnd.jsx'
import BackEnd from '../displays/TextSections/BackEnd.jsx'
import AboutMe from '../displays/TextSections/AboutMe.jsx'

import './main.scss'

let leftNavItems = [
  'About Me',
  'Code',
  'Portfolio'
]

let portfolioItems = [
  'Perks',
  'Article',
  'Space Cat'
]

class App extends Component {

  constructor () {
    super()
    this.state = ({
      activeTab: 'About Me',
      activeCodeGroup: 'FrontEnd',
      activePortfolioItem: 'Perks'
    })
  }

  onTabClick (newTab) {
    this.setState({
      activeTab: newTab
    })
  }

  onCodeGroupClick (newCodeGroup) {
    this.setState({
      activeCodeGroup: newCodeGroup
    })
  }

  render () {
    console.log(this.state.activeCodeGroup)
    let codeContentClass = classNames({
      'codeContent': true,
      [`${this.state.activeCodeGroup}-active`]: this.state.activeCodeGroup
    })
    let contentClass = classNames({
      'content': true,
      [`${this.state.activeTab}-active`]: this.state.activeTab
    })
    return (
      <div>
        <div className='header'>
          <div className='title'>Lucas Gregory</div>
        </div>
        <div className='body'>
          <div className='container'>
            <div className='left-nav'>
              <Nav>
                {leftNavItems.map((tab, index) => (
                  <NavItem
                    value={tab}
                    key={index}
                    isActive={this.state.activeTab === tab}
                    onClick={(newTab) => this.onTabClick(newTab)}
                  />
                ))}
              </Nav>
            </div>
            <div className={contentClass}>
              <div className='aboutme'>
                <AboutMe />
              </div>
              {this.state.activeTab === 'Code' &&
                <div className={codeContentClass}>
                  <div className='codeGroups'>
                    <IconGroup
                      name='FrontEnd'
                      isActive={this.state.activeCodeGroup === 'FrontEnd'}
                      onClick={(newCodeGroup) => this.onCodeGroupClick(newCodeGroup)}
                    >
                      <Icon name='react' size='md' />
                      <Icon name='redux' size='md' />
                      <Icon name='html' size='md' />
                      <Icon name='sass' size='md' />
                    </IconGroup>
                    <IconGroup
                      className='lastCodeGroup'
                      name='BackEnd'
                      isActive={this.state.activeCodeGroup === 'BackEnd'}
                      onClick={(newCodeGroup) => this.onCodeGroupClick(newCodeGroup)}
                    >
                      <Icon name='java' size='md' />
                      <Icon name='python' size='md' />
                      <Icon name='swift' size='md' />
                    </IconGroup>
                  </div>
                  <div className='FrontEnd'>
                    <FrontEnd />
                  </div>
                  <div className='BackEnd'>
                    <BackEnd />
                  </div>
                </div>
              }
              { this.state.activeTab === 'Portfolio' &&
                <Portfolio />
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
