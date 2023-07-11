import type * as CSS from 'csstype'
import { paramCase } from 'param-case'
import { ReactNode, useEffect, useMemo } from 'react'
import crypto from 'crypto'

type Sx = CSS.Properties

const generateStyles = (sx: Sx): string => {
  return Object.entries(sx)
    .map(([key, value]) => `${paramCase(key)}: ${value};`)
    .join('\n')
}

type BoxProps = {
  children?: ReactNode
  onClick?: () => void
} & CSS.Properties

const Box = ({ children, onClick, ...sx }: BoxProps) => {
  const className = useMemo(() => {
    const stringified = JSON.stringify(sx)
    const hash = crypto.createHash('sha256').update(stringified).digest('hex')
    return `bankai-${hash}`
  }, [sx])

  useEffect(() => {
    const head = document.querySelector('head')
    if (!head) return

    const tag = document.createElement('style')
    tag.innerHTML = `.${className} { ${generateStyles(sx)} }`
    head.appendChild(tag)

    return () => {
      head.removeChild(tag)
    }
  }, [sx, className])

  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  )
}

export { Box, type BoxProps }
