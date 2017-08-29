import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {

  /*updateBook(updatedBook, shelf) {
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
  }*/

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage />
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchPage />
        )}/>
      </div>
    )
  }
}

export default BooksApp
