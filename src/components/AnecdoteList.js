import React from 'react'
import Filter from './Filter'
import { vote } from '../reducers/anecdoteReducer'
import { notification, removeNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

  handleVote = (id) => () => {
    const anecdote = this.props.anecdotes.find(a => a.id === id)
    this.props.vote(id)
    this.props.notification(`You voted '${anecdote.content}'`)
    setTimeout(() => {
      this.props.removeNotification()
    }, 5000)

    /*
    this.props.store.dispatch(vote(id))
    this.props.store.dispatch(notification(`You voted '${anecdote.content}'`))
    setTimeout(() => {
      this.props.store.dispatch(removeNotification())
    }, 5000)*/
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {this.props.anecdotes.filter(a => a.content.indexOf(this.props.filter) >= 0).sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = (state) => (
  {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
)

const mapDispatchToProps = {
  vote,
  notification,
  removeNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
