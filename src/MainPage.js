import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class MainPage extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  render () {
    const {books} = this.state
    let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    let read = books.filter((book) => book.shelf === 'read')
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <Bookshelf title='Currently Reading' books={currentlyReading} />
          <Bookshelf title='Want to Read' books={wantToRead} />
          <Bookshelf title='Read' books={read} />
          </div>
        </div>
        <div className="open-search">
          <a href="/search">Add a book</a>
        </div>
      </div>
    )
  }
}

export default MainPage
