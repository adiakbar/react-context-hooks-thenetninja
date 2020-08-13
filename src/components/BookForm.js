import React, {useContext, useState} from 'react'
import {BookContext} from '../contexts/BookContext'

function BookForm() {
  const {addBook} = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook(title, author)
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="title" name="title" value={title} placeholder="Title" autoComplete="off" onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" id="author" name="author" value={author} placeholder="Author" autoComplete="off" onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="Add Book"/>
    </form>
  )
}

export default BookForm
