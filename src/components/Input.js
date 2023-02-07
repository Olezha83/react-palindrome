import { forwardRef } from 'react'

import './Input.css'

const Input = forwardRef(function Input(props, ref) {
  const { text, error, onFocus, onChange, onSubmit } = props

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={ref}
        placeholder="Type your string here"
        className={error ? 'error' : ''}
        value={text}
        onFocus={onFocus}
        onChange={onChange}
      />
      <button type="submit">Check</button>
    </form>
  )
})

export default Input
