import { useEffect, useState, useRef } from 'react'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'

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


interface AppState{
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    setSubs(INITIAL_STATE)
  },[])
  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1> MIDU subs:</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  )
}

export default App
