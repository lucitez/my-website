import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './iconGroup.scss'

class IconGroup extends Component {
  constructor () {
    super ()

    this.state = ({
      isActive: false
    })
  }

  componentWillMount(){
    this.setState({
      isActive: this.props.isActive
    })
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isActive: nextProps.isActive
    })
  }

  _onClick(){
    this.props.onClick(this.props.name)
  }

  render () {
    let iconGroupClass = classNames({
      'iconGroup': true,
      'isActive': this.state.isActive,
      [`${this.props.className}`]: this.props.className
    })

    return (
      <div className={iconGroupClass} onClick={this._onClick.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

export default IconGroup
