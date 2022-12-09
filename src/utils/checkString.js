import removedSymbols from './removedSymbols'

function checkString(inputText) {
  const checkResult =
    inputText.toLowerCase().replaceAll(removedSymbols, '') ===
    inputText
      .toLowerCase()
      .replaceAll(removedSymbols, '')
      .split('')
      .reverse()
      .join('')

  return checkResult
}

export default checkString
