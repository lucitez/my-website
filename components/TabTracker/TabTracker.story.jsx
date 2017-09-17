import React from 'react'
import { storiesOf } from '@storybook/react'
import TabTracker from './TabTracker'

storiesOf('TabTracker', module)
  .add('Default theme, 2 options', () => (
    <TabTracker
      totalPositions='2'
      currentPosition='1'
    />
  ))
