export const printName = () => {
    return(dispatch) => {
      return fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then(image => dispatch({ type: "PRINT_NAME", payload: image.message }))
    }
  }