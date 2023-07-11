import * as React from 'react'

import './page.css'
import { useState } from 'react'

export default function CSSPage() {
  const [bgClassName, setBgClassName] = useState<'red' | 'blue'>('red')

  const toggleBgClassName = () => {
    setBgClassName(bgClassName === 'red' ? 'blue' : 'red')
  }

  return (
    <div className={'page'}>
      <div className={`card ${bgClassName}`} onClick={toggleBgClassName}>
        <p>Hello, CSS</p>
      </div>
    </div>
  )
}
