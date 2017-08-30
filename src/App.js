import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {

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
