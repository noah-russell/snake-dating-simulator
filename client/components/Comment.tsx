import React, { ChangeEvent, FormEvent, useState } from 'react'

const initialFormData = {
  comment: '',
}

export default function CommentForm() {
  const [form, setForm] = useState(initialFormData)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Handle the submission of the form data (e.g., send it to a server or perform some action)
    console.log('Form submitted:', form.comment)
    // Optionally, you can reset the form after submission
    setForm(initialFormData)
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Add Comment Form">
      <p>
        <label htmlFor="comment">Comment:</label>
        <br />
        <input
          id="comment"
          type="text"
          onChange={handleChange}
          value={form.comment}
          name="comment"
        />
      </p>

      <button type="submit">Submit</button>
    </form>
  )
}
