import { useState } from "react"

const Form = () =>{
  const [inputValues, setInputValues] = useState({
    nick:'',
    subMonths: 0,
    avatar: '',
    description:'',
  })
  
  const handleSubmit = () =>{}

  const handleChange = e =>{
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
        <input value={inputValues.avatar} type="text" name="avatar" onChange={handleChange} placeholder="avatar"/>
        <input value={inputValues.description} type="text" name="description" onChange={handleChange} placeholder="description"/>
        <button>Save new sub!</button>
      </form>
    </div>
  )
}
export default Form