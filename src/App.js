import { useState } from 'react'
import './App.css'
import Head from './components/Head'
import Input from './components/Input'
import Answer from './components/Answer'
import checkString from './utils/checkString'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [errorInput, setErrorInput] = useState(false)
  const [answerVisibility, setAnswerVisibility] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleInputFocus = () => {
    setInputValue('')
    setErrorInput(false)
    setAnswerVisibility('')
  }

  const handleCheckButton = () => {
    if (!inputValue) {
      setErrorInput(true)
      return
    }

    checkString(inputValue)
      ? setAnswerVisibility('positive')
      : setAnswerVisibility('negative')
  }

  return (
    <div className="App">
      <Head />
      <Input
        inputValue={inputValue}
        errorInput={errorInput}
        onInputChange={handleInputChange}
        onInputFocus={handleInputFocus}
        onButtonClick={handleCheckButton}
      />
      <Answer visibility={answerVisibility} />
    </div>
  )
}

export default App
