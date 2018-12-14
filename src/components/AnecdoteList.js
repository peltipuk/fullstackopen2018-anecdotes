import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { notification, removeNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {

  handleVote = (id) => () => {
    const anecdote = this.props.store.getState().anecdotes.find(a => a.id === id)
    this.props.store.dispatch(vote(id))
    this.props.store.dispatch(notification(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      this.props.store.dispatch(removeNotification())
    }, 5000)
  }

  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleVote(anecdote.id)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AnecdoteList
