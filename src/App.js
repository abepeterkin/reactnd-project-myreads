import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  updateBook(updatedBook, shelf) {
    BooksAPI.update(updatedBook, shelf).then((response) => {
      console.log(response);
      this.setState((state) => {
        state.books.map((book) => {
          if (book.title === updatedBook.title) {
            let newBook = Object.assign({}, book)
            newBook.shelf = shelf
            return newBook
          } else {
            return book
          }
        })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage
            updateBook={this.state.updateBook}
            books={this.state.books}
          />
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchPage
            updateBook={(updatedBook, shelf) => {
              this.updateBook(updatedBook, shelf)
            }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
