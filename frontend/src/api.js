import axios from 'axios'

const AUTH_TOKEN = localStorage.getItem('AUTH_TOKEN')
axios.defaults.baseURL = 'https://api.example.com'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(
  (request) => {
    console.log(request)
    return request
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    console.log(response)
    return response
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

const user = {
  // DUMMY: just setup
  me: () => axios.get('/profile').then((res) => res.data),
}

export { user }
