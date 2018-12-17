import React from 'react'
import { filter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

class Filter extends React.Component {
  /*handleChange = (event) => {
    const filterValue = event.target.value
    this.props.store.dispatch(filter(filterValue))
  }*/

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter <input onChange={this.props.filter} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (event) => {
      const filterValue = event.target.value
      dispatch(filter(filterValue))
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)
