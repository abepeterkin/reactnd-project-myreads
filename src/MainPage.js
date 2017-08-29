import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

class MainPage extends Component {
  render () {
    const { books} = this.props
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
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default MainPage
