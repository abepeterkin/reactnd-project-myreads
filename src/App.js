import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    bookMap: {}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const bookMap = {}
      books.forEach(book => {
        bookMap[book.id] = book
      })
      this.setState({ bookMap: bookMap })
    })
  }

  updateBook = (updatedBook, shelf) => {
    BooksAPI.update(updatedBook, shelf).then((response) => {
      const bookMap = this.state.bookMap
      for (var id in bookMap) {
        if (!bookMap.hasOwnProperty(id)) continue
        const book = bookMap[id];
        if (book.id && book.id === updatedBook.id) book.shelf = shelf
      }
      this.setState({bookMap: bookMap})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage bookMap={this.state.bookMap} updateBook={this.updateBook}/>
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchPage bookMap={this.state.bookMap} updateBook={this.updateBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
