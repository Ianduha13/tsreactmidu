import { useState } from "react"
import { Sub } from "../types"

interface FormState{
  inputValues: Sub
}

const Form = () =>{
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick:'',
    subMonths: 0,
    avatar: '',
    description:'',
  })
  
  const handleSubmit = () =>{}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputValues.nick} onChange={handleChange} type="text" name="nick" placeholder="nickname"/>
        <input value={inputValues.subMonths} onChange={handleChange} type="number" name="subMonths" placeholder="subMonths"/>
        <input value={inputValues.avatar} onChange={handleChange} type="text" name="avatar" placeholder="avatar"/>
        <textarea value={inputValues.description} onChange={handleChange} name="description" placeholder="description"/>
        <button>Save new sub!</button>
      </form>
    </div>
  )
}

export default Form