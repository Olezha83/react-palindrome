import { useState, useRef } from 'react'
import './App.css'
import Head from './components/Head'
import Input from './components/Input'
import Answer from './components/Answer'
import checkString from './utils/checkString'

function App() {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)
  const [visibility, setVisibility] = useState('')
  let inputRef = useRef(null)

  const onChangeHandler = (event) => {
    setText(event.target.value)
    if (text === '') {
      setVisibility('')
    }
  }

  const onFocusHandler = () => {
    setText('')
    setError(false)
    setVisibility('')
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    inputRef.current.blur()
    if (!text) {
      setError(true)
      return
    }

    checkString(text) ? setVisibility('positive') : setVisibility('negative')
  }

  return (
    <div className="App">
      <Head />
      <Input
        ref={inputRef}
        text={text}
        error={error}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onSubmit={onSubmitHandler}
      />
      <Answer visibility={visibility} />
    </div>
  )
}

export default App
