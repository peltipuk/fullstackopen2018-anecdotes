import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import anecdoteService from './services/anecdotes'
import { connect } from 'react-redux'
import { init } from './reducers/anecdoteReducer'

class App extends React.Component {

  async componentDidMount() {
    const anecdotes = await anecdoteService.getAll()
    this.props.initAnecdotes(anecdotes)
  }

  render() {
    //const anecdotes = this.props.store.getState()
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

const mapDispatchToProps = { initAnecdotes: init }

export default connect(null, mapDispatchToProps)(App)
