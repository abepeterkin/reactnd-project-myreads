import React, {Component} from 'react'
import Bookshelf from './Bookshelf'

class MainPage extends Component {

  render () {
    const {bookMap} = this.props
    const currentlyReading = []
    const wantToRead = []
    const read = []
    for (var id in bookMap) {
      if (!bookMap.hasOwnProperty(id)) continue
      const book = bookMap[id];
      switch (book.shelf) {
        case 'currentlyReading':
          currentlyReading.push(book)
          break
        case 'wantToRead':
          wantToRead.push(book)
          break
        case 'read':
          read.push(book)
          break
        default:
          break
      }
    }
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <Bookshelf title='Currently Reading'
            books={currentlyReading}
            updateBook={this.props.updateBook}
          />
          <Bookshelf title='Want to Read'
            books={wantToRead}
            updateBook={this.props.updateBook}
          />
          <Bookshelf title='Read'
            books={read}
            updateBook={this.props.updateBook}
          />
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
