import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Nav.scss'

class Nav extends Component {
  render() {
    let navClass = classNames({
      'nav': true,
      [`display-${this.props.display}`]: this.props.display
    })
    return (
      <div className={navClass}>
        {this.props.children}
      </div>
    )
  }
}

export default Nav
