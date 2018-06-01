import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Nav.scss'

class NavItem extends Component {
  constructor () {
    super ()
    this.state = ({
      isActive: false
    })
  }

  componentWillMount() {
    this.setState({
      isActive: this.props.isActive
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isActive: nextProps.isActive
    })
  }

  _onClick () {
    this.props.onClick(this.props.value)
  }

  render () {
    let navItemClass = classNames({
      'navItem': true,
      'is-active': this.state.isActive,
      [`orientation-${this.props.orientation}`]: this.props.orientation,
      'hover-effect': this.props.hover
    })
    return (
      <div className='navItemWrapper' onClick={this._onClick.bind(this)}>
        <div className={navItemClass} >
          {this.props.value}
        </div>
      </div>
    )
  }
}

NavItem.propTypes = {
  isActive: PropTypes.bool,
  orientation: PropTypes.oneOf([
    'vertical',
    'horizontal'
  ]),
  hover: PropTypes.bool,
  value: PropTypes.string
}

export default NavItem
