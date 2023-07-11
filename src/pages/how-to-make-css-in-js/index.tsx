import { useState } from 'react'
import { Box } from '@/bankai-ui'

export default function HowToMakeCSSinJSPage() {
  const [backgroundColor, setBackgroundColor] = useState<'red' | 'blue'>('red')

  const toggleBackgroundColor = () => {
    setBackgroundColor(backgroundColor === 'red' ? 'blue' : 'red')
  }

  return (
    <Box
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        backgroundColor={backgroundColor}
        padding={'32px 40px'}
        onClick={toggleBackgroundColor}
      >
        <Box color={'white'} fontSize={'20px'}>
          Hello, Bankai UI
        </Box>
      </Box>
    </Box>
  )
}
