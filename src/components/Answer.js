import './Answer.css'

function Answer({ visibility }) {
  if (visibility === 'positive') {
    return (
      <div className="positive_answer">Yes, this string is a palindrome</div>
    )
  }
  if (visibility === 'negative') {
    return (
      <div className="negative_answer">No, this string is not a palindrome</div>
    )
  }
}

export default Answer
