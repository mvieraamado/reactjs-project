import { Box, Flex } from '@chakra-ui/react';
import TaskList from '../components/TaskList';
import { Text } from '@chakra-ui/react';

const Main = ()=> {
  return (
    <>
      <Flex
        m={'auto'}
        maxW={'500px'}
        w={'100%'}
        h={'100vh'}
        flexDir={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        bg={'white'}
      >
        <Box p={5} w={'100%'}
          h={'500px'}
          bg={'gray.700'}
          flexDirection={'column'}
          alignItems={'center'}
          borderRadius={'20px'}
        >
          <Text as={'h1'} m={3}
            fontSize={'1.5rem'}
            fontWeight={'semibold'}
            color={'white'}
            textAlign={'center'}
          >
            My Tasks
          </Text>
          <TaskList/>
        </Box> 
        <Text as={'p'} mt={5} fontSize={'1rem'}>Made by Mariam Viera Amado</Text>
      </Flex>
    </>
  )
}

export default Main;