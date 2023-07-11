import { style } from '@vanilla-extract/css'

const centerStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
})

const cardStyles = style({
  padding: '32px 40px',
  borderRadius: '10px',
})

const redStyles = style({
  backgroundColor: 'red',
})

const blueStyles = style({
  backgroundColor: 'blue',
})

const textStyles = style({
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
})

export { centerStyles, cardStyles, redStyles, blueStyles, textStyles }
