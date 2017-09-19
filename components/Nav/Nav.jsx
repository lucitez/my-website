import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Nav.scss'

class Nav extends Component {
  render() {
    let navClass = classNames({
      'nav': true,
      [`orientation-${this.props.orientation}`]: this.props.orientation
    })
    return (
      <div className={navClass}>
        {this.props.children}
      </div>
    )
  }
}

Nav.defaultProps = {
  orientation: 'vertical'
}

Nav.propTypes = {
  orientation: PropTypes.oneOf([
    'horizontal',
    'vertical'
  ]),
  children: PropTypes.any
}

export default Nav
