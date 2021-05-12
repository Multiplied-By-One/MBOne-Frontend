// import axios and create pre-configured version of axios
import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000'
})