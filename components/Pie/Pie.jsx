import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Pie.scss'

const Pie = ({
  percentage
}) => {
  let pieClass = classNames({
    'pie': true,
    [`${percentage}-percent`]: percentage
  })
  return(
    <div className={pieClass} />
  )
}

Pie.PropTypes = {
  percentage: PropTypes.oneOf([
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
    'onehundred'
  ]).isRequired
}

export default Pie
