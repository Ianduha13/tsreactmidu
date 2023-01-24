import React, { useReducer, useState} from "react"
import { Sub } from "../types"

interface FormState{
  inputValues: Sub
}
interface FormProps{
  onNewSub:  (newSub: Sub) => void
}
const INITIAL_STATE = {
    nick:'',
    subMonths: 0,
    avatar: '',
    description:'',
  }
  type FormReducerAction ={
    type:"change_value",
    payload:{
      inputName: string,
      inputValue: string
    }
  }| {
    type: "clear"
  }
  const formReducer = ( state: FormState["inputValues"], action: FormReducerAction ) => {
    switch( action.type ) {
      case "change_value" :
        const { inputName, inputValue } = action.payload
        return {
          ...state,
          [inputName] : inputValue
        }
        case "clear" :
          return INITIAL_STATE
    }
  }
const Form = ({ onNewSub }: FormProps) =>{
  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    onNewSub(inputValues)
    handleClear()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name, value} = e.target
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }
  const handleClear = () =>{
    dispatch({type:"clear"})
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValues.nick} onChange={handleChange} type="text" name="nick" placeholder="nickname"/>
        <input value={inputValues.subMonths} onChange={handleChange} type="number" name="subMonths" placeholder="subMonths"/>
        <input value={inputValues.avatar} onChange={handleChange} type="text" name="avatar" placeholder="avatar"/>
        <textarea value={inputValues.description} onChange={handleChange} name="description" placeholder="description"/>
        <button onClick={handleClear}>Save new sub!</button>
        <button>Save new sub!</button>
      </form>
    </div>
  )
}

export default Form