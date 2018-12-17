const initialFilter = ''

const reducer = (store = initialFilter, action) => {
  if (action.type === 'FILTER') {
    //console.log('new filter value:', action.value)
    return action.value
  } else {
    return store
  }
}

const filter = (value) => ({
  type: 'FILTER',
  value: value
})

export { filter }
export default reducer
