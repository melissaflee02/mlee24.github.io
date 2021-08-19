import * as React from 'react'

import { Card } from '.'

export default {
  title: 'website/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Base = () => {
  const contentMap = [
    {
      content:'I\'m Melissa, a Computer Science major at Stanford University. I am a software engineer intern at Pareto Inc., working with React JS and GraphQL to build and maintain responsive web pages.'
    },
    {
      content:'In my free time, I enjoy playing ultimate frisbee and learning more about the programming world through independent coding projects. Feel free to check out my Github!'
    },
    {
      content:'Having struggled with social interaction at a young age, I am passionate about leveraging technology to advance the human interaction model. In pursuit of this goal, I envision an Artificial Intelligence bot that can facilitate, and engage in, healthy human interaction.'
    },
  ]

  return (
    <Card 
      id="card"
      contentMap={contentMap}
    />
  )
}