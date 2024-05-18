import axios from "axios"

export const axiosClient = axios.create({
  baseURL: "https://backend-pescarte-1.onrender.com"
})