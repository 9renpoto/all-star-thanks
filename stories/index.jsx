/* @flow */
import { storiesOf } from '@storybook/react'
import { date, random } from 'faker'
import React from 'react'

import '../src/css/style.css'
import App from '../src'

storiesOf('Content', module).add('App', () => (
  <App
    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => ({
      name: random.word(),
      point: random.number(),
      time: `${date.past()}`
    }))}
  />
))
