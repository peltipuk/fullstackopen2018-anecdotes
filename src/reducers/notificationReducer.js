const initialNotification = 'Initial notification'

const reducer = (store = initialNotification, action) => {
  switch (action.type) {
    case 'NOTIFICATION': {
      return action.notification
    }
    case 'REMOVE_NOTIFICATION': {
      return ''
    }
    default:
      return store
  }
}

const notification = (notification) => {
  console.log('creating notification action')
  return {
    type: 'NOTIFICATION',
    notification: notification
  }
}

const removeNotification = () => {
  console.log('creating remove_notification action')
  return { type: 'REMOVE_NOTIFICATION' }
}

export { notification, removeNotification }
export default reducer
