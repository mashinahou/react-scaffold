import React, { useContext, createContext, useState, useCallback } from 'react';
import { Button } from './components/button'
import { ButtonArea } from './components/button_area'
import { Text } from './components/text'

export const TextContext = createContext(
  {
    text: 'first',
    setText: (value: string) => {}
  }
  )

function App() {
  const [text, setText] = useState('first')

  return (
    <div className="flex">
       <TextContext.Provider value={{text,  setText}}>
      <ButtonArea>
        <Button></Button>
        <Text>abcdefg</Text>
      </ButtonArea>
      </TextContext.Provider>
    </div>
  );
}

export default App;
