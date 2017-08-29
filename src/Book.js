import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
  handleChange = (event) => {
    BooksAPI.update(this.props.book, event.target.value).then((response => {
      //TODO: update the state somehow
    }));
  }
  render () {
    const {book} = this.props
    let thumbnail = ''
    if (book.imageLinks) thumbnail = book.imageLinks.thumbnail
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193,
            backgroundImage: 'url(' + thumbnail + ')' }}>
          </div>
          <div className="book-shelf-changer">
            <select onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
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
