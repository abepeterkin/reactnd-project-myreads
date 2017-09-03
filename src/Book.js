import React, {Component} from 'react'

class Book extends Component {

  handleChange = (event) => {
    this.props.updateBook(this.props.book, event.target.value)
  }

  render () {
    const {book} = this.props
    let thumbnail = ''
    if (book.imageLinks) thumbnail = book.imageLinks.thumbnail
    const shelf = book.shelf || 'none'
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: 'url(' + thumbnail + ')' }}>
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={this.handleChange}>
              <option value="" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.map((author) =>
          <div key={author}>{author}</div>
        )}</div>
      </div>
    )
  }
}

export default Book
