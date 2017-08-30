import React, {Component} from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class MainPage extends Component {

  state = {
    books: []
  }

  getAll = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  componentDidMount() {
    this.getAll()
  }

  updateBook = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then((response) => {
      console.log(response);
      this.getAll()
    })
  }

  render () {
    const {books} = this.state
    const currentlyReading = []
    const wantToRead = []
    const read = []
    books.forEach(book => {
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
    })
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <Bookshelf title='Currently Reading'
            books={currentlyReading}
            updateBook={this.updateBook}
          />
          <Bookshelf title='Want to Read'
            books={wantToRead}
            updateBook={this.updateBook}
          />
          <Bookshelf title='Read'
            books={read}
            updateBook={this.updateBook}
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
