import { ChangeEvent, FormEvent, useState } from 'react'
import { addMessage } from '../../server/db/repcalc'
import { sendComment } from '../apis/apiClient'

export default function CommentForm() {
  const [comment, setComment] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // const { name, value } = event.target
    // const formObj = { ...form, [event.target.name]: event.target.value }
    // setForm(formObj)
    // console.log(form)
    setComment(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Handle the submission of the form data (e.g., send it to a server or perform some action)
    // addMessage(form.comment)
    // console.log(event.target.value)
    // // Optionally, you can reset the form after submission
    sendComment(comment)
    // addMessage(comment)
    console.log(comment)
    setComment('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Add Comment Form">
        <p>
          <label htmlFor="comment">Comment:</label>
          <br />
          <input
            id="comment"
            type="text"
            onChange={handleChange}
            value={comment}
            name="comment"
          />
        </p>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
