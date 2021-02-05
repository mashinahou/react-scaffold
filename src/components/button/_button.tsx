import React, { FC, useCallback, useContext } from 'react'
import {ButtonPrensetation} from './presentation'
export const Button: FC = () => {

  const handleButtonClick = useCallback(() => {
    alert("aaa")
  },[])

  return <ButtonPrensetation onClick={handleButtonClick}></ButtonPrensetation>
}
