import { Box, Button, Flex } from '@chakra-ui/react';
import { BsX } from 'react-icons/bs';

const Task = ({id, text, completed, completedTask, deleteTask})=> {
  return (
    <Flex
      m={4} p={5}
      w={'90%'}
      minH={'70px'}
      borderRadius={'10px'}
      bg={completed ? 'gray.400' : 'gray.600'}
      textDecoration={completed ? 'line-through' : 'none'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <Box fontSize={'1.1rem'}
        flex={1} color={'white'}
        textTransform={'capitalize'} 
        onClick={()=> completedTask(id)}
      >
        {text}
      </Box>
      <Button 
        type='button'
        borderRadius={'30px'}
        bg={'blue.200'}
        color={'black'}
        onClick={()=> deleteTask(id)}>
        <BsX />
      </Button>
    </Flex>
  )
}

export default Task;