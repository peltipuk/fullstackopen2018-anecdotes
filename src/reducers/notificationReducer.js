const initialNotification = 'Initial notification'

const reducer = (store = initialNotification, action) => {
  switch(action.type) {
    case 'NOTIFICATION': {
      return action.notification
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

export { notification }
export default reducer
