import * as React from 'react'

import { Box, Center, ChakraProvider, Text } from '@chakra-ui/react'

export default function ChakraPage() {
  const [bg, setBg] = React.useState<'red' | 'blue'>('red')

  const toggleBg = () => {
    setBg(bg === 'red' ? 'blue' : 'red')
  }

  return (
    <ChakraProvider>
      <Center h={'100vh'}>
        <Box bg={bg} px={10} py={8} rounded={'md'} onClick={toggleBg}>
          <Text color={'white'} fontWeight={'bold'} fontSize={'xl'}>
            Hello, Chakra UI
          </Text>
        </Box>
      </Center>
    </ChakraProvider>
  )
}
