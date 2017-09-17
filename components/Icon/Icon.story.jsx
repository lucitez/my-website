import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './Icon'

let strokeIcons = [
  'react',
  'redux',
  'html'
]

let fillIcons = [
  'play-button',
  'pause-button'
]

storiesOf('Icon', module)
  .add('Icons', () => (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      border: '9px solid #fff'
    }}>
      {strokeIcons.map((name, index) => (
        <div
          tabIndex={index}
          role='button'
          key={index}
          className='icon-example'
          style={{
            outline: 'none',
            border: '1px solid #fff',
            background: '#fafafa',
            height: '100px',
            flexGrow: '1',
            width: '33%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Icon name={name} color='orange' size='sm'/>
          <Icon name={name} color='orange' size='md'/>
          <Icon name={name} color='orange' size='lg'/>
        </div>
      ))}
      {fillIcons.map((name, index) => (
        <div
          tabIndex={index}
          role='button'
          key={index}
          className='icon-example'
          style={{
            outline: 'none',
            border: '1px solid #fff',
            background: '#fafafa',
            height: '100px',
            flexGrow: '1',
            width: '33%',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <Icon name={name} color='orange' type='fill' size='sm'/>
          <Icon name={name} color='orange' type='fill' size='md'/>
          <Icon name={name} color='orange' type='fill' size='lg'/>
        </div>
      ))}
    </div>
  ))
