import * as React from 'react'

import { Toggle } from '.'

export default {
  title: 'website/Toggle',
  component: Toggle,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Base = () => {
  return (
    <Toggle id="mode" name="mode" />
  )
}
