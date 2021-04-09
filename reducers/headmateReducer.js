const headmate = (state = '', action) => {
    switch(action.type) {
      case 'PRINT_NAME':
        return action.payload
      default:
        return state
      }
  }
  export default headmate;