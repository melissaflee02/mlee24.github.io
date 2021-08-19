import * as React from 'react'

import { Navigation } from '.'

export default {
  title: 'website/Navigation',
  component: Navigation,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Base = () => {
  const menu = [
    {
      name:'About',
      link:'',
    },
    {
      name:'LinkedIn',
      link:'https://www.linkedin.com/in/melissaflee02/',
    },
    {
      name:'Github',
      link:'https://github.com/melissaflee02',
    },
    {
      name:'Email',
      link:'mailto: mlee24@stanford.edu',
    }
  ]

  return (
    <main style={{ height: '100%' }}>
      <Navigation
        menu={menu}
      />
    </main>
  )
}
