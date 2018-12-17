import React from 'react'
import { connect } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notification, removeNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.create(content)
    this.props.notification(`Added new anecdote '${content}'`)
    setTimeout(() => {
      this.props.removeNotification()
    }, 5000)

    e.target.anecdote.value = ''
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  } 
}

const mapDispatchToProps = {
  create,
  notification,
  removeNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
