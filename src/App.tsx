import { useEffect, useState } from 'react'
import List from './components/List'
import Form from './components/Form'

const INITIAL_STATE = [
    {
      nick: 'dapelu',
      subMonths: 3,
      avatar: 'http://i.pravatar.cc/150?u=dapelu',
      description: "Dapelu es moderador aveces"
    },
    {
      nick: 'sergio_serrano',
      subMonths: 7,
      avatar:'http://i.pravatar.cc/150?u=sergio_serrano'
    }
  ]

interface Sub{
  nick: string
  subMonths: number
  avatar: string
  description?: string
}
interface AppState{
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])

  useEffect(() =>{
    setSubs(INITIAL_STATE)
  },[])

  return (
    <div className="App">
      <h1> MIDU subs:</h1>
      <List subs={subs}/>
      <Form/>
    </div>
  )
}

export default App
