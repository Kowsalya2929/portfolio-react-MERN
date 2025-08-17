import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://portfolio-react-bspc.onrender.com/api",
    withCredentials: true
})

export default axiosInstance;