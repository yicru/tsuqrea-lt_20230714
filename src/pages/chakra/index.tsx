import * as React from 'react'

import { Box, Center, ChakraProvider, Text } from '@chakra-ui/react'

export default function ChakraPage() {
  return (
    <ChakraProvider>
      <Center h={'100vh'}>
        <Box bg={'teal.500'} px={10} py={8} rounded={'md'}>
          <Text color={'white'} fontWeight={'bold'} fontSize={'xl'}>
            Hello, Chakra UI
          </Text>
        </Box>
      </Center>
    </ChakraProvider>
  )
}
