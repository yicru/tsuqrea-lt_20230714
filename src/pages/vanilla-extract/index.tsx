import * as React from 'react'
import { useState } from 'react'
import {
  blueStyles,
  cardStyles,
  centerStyles,
  redStyles,
  textStyles,
} from '@/pages/vanilla-extract/page.css'

export default function VanillaExtract() {
  const [bg, setBg] = useState<'red' | 'blue'>('red')

  const toggleBg = () => {
    setBg(bg === 'red' ? 'blue' : 'red')
  }

  return (
    <div className={centerStyles}>
      <div
        className={`${cardStyles} ${bg === 'red' ? redStyles : blueStyles}`}
        onClick={toggleBg}
      >
        <p className={textStyles}>Hello, Vanilla Extract</p>
      </div>
    </div>
  )
}
