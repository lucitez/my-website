import React from 'react'
import { storiesOf } from '@storybook/react'
import ProficiencyBar from './ProficiencyBar.jsx'

storiesOf('Proficiency Bar', module)
  .add('10%', () => (
    <ProficiencyBar percentage='10' />
  ))
