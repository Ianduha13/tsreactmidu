import { useEffect, useState, useRef } from 'react'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'

interface AppState{
  subs: Array<Sub>
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const divRef = useRef<HTMLDivElement>(null)


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
