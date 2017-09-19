import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './ProficiencyBar.scss'

const ProficiencyBar = ({
  percentage
}) => {
  console.log(percentage)
  let proficiencyBarClass = classNames({
    'proficiencyBar': true,
    [`percentage-${percentage}`]: percentage
  })
  return(
    <div className='mainBar'>
      <div className={proficiencyBarClass} />
    </div>
  )
}

ProficiencyBar.PropTypes = {
  percentage: PropTypes.oneOf([
    '10',
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90'
  ]).isRequired
}

export default ProficiencyBar
