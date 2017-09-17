import React from 'react'
import { storiesOf } from '@storybook/react'
import Nav from './Nav'
import NavItem from './NavItem'

let values = [
  'wow',
  'cool',
  'gosh'
]

storiesOf('Navigation', module)
  .add('default theme and layout', () => (
    <Nav>
      {values.map((tab, index) => (
        <NavItem value={tab} key={index} />
      ))}
    </Nav>
  ))
  .add('horizontal layout', () => (
    <Nav display='horizontal'>
      {values.map((tab, index) => (
        <NavItem display='horizontal' value={tab} key={index} />
      ))}
    </Nav>
  ))
  .add('horizontal layout with triangle', () => (
    <Nav display='horizontal' withTriangle>
      {values.map((tab, index) => (
        <NavItem display='horizontal' value={tab} key={index} />
      ))}
    </Nav>
  ))
