import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reacttest-eaca9.firebaseio.com',
})

export default instance
