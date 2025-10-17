import axios from "axios";

const apiUrl = 'https://kfw42ifuej.execute-api.us-east-1.amazonaws.com/dev/dockets'
const axiosInstance = axios.create({})

export async function uploadFile(file) {
  const data = new FormData()
  data.set('file', file)
  const config = {
    url: apiUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  }
  return axiosInstance(config)
}
