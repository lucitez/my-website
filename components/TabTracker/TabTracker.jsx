import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './TabTracker.scss'

class TabTracker extends Component {
  constructor () {
    super ()
    this.state = ({
      totalPositions: 0,
      currentPosition: 0
    })
  }

  componentWillMount () {
    this.setState ({
      totalPositions: this.props.totalPositions,
      currentPosition: this.props.currentPosition
    })
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    this.setState ({
      currentPosition: nextProps.currentPosition
    })
  }

  render () {
    let tabTrackerClass = classNames({
      'tabTracker': true,
      [`options-${this.state.totalPositions}`]: this.state.totalPositions,
      [`option-${this.state.currentPosition}`]: this.state.currentPosition,
    })

    return (
      <div
        className={tabTrackerClass}
      >
        <div className='triangle' />
      </div>
    )
  }
}

TabTracker.defaultProps = {
  currentPosition: 1
}

TabTracker.PropTypes = {
  totalPositions: PropTypes.number,
  currentPosition: PropTypes.number
}

export default TabTracker
