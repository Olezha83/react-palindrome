import '../styles/input.css'

function Input({
  inputValue,
  errorInput,
  onInputFocus,
  onInputChange,
  onButtonClick,
}) {
  return (
    <div>
      <input
        placeholder="Type your string here"
        className={errorInput ? 'error' : ''}
        value={inputValue}
        onFocus={onInputFocus}
        onChange={onInputChange}
      />
      <button onClick={onButtonClick}>Check</button>
    </div>
  )
}

export default Input
