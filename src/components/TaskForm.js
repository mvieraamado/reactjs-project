import { Button, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props)=> {
  const [ input, setInput ] = useState('');

  const handleChange = (e)=> {
    setInput(e.target.value)
  }

  const handlerSubmit = (e)=> {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask);
  }

  return (
    <form onSubmit={handlerSubmit}>
      <Flex flexDir={'row'}>
        <Input
          m={1}
          color={'white'}
          type='text'
          placeholder='Write a text'
          name='text'
          onChange={handleChange}
        />
        <Button type='submit' borderRadius={'10px'} bg={'blue.500'} m={1}>
          Add
        </Button>
      </Flex>
      
    </form>
  )
}

export default TaskForm;