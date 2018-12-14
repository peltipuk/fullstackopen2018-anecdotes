const initialNotification = 'Initial notification'

const reducer = (store = initialNotification, action) => {
  switch (action.type) {
    case 'NOTIFICATION': {
      return action.notification
    }
    case 'REMOVE_NOTIFICATION': {
      return ''
    }
  }
  return store
}

const notification = (notification) => {
  return {
    type: 'NOTIFICATION',
    notification: notification
  }
}

const removeNotification = () => {
  return { type: 'REMOVE_NOTIFICATION' }
}

export { notification, removeNotification }
export default reducer
