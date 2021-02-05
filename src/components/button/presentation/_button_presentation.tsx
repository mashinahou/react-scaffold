import React, {FC} from 'react'
type Props = {
  onClick: () => void
}
export const ButtonPrensetation:FC<Props> = (props) => {
  return <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>ボタン</button>
}
