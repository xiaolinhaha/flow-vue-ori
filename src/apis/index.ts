import axios, { AxiosRequestConfig } from 'axios'

export default function post(url: string, data?: any, config?: AxiosRequestConfig) {
  return axios.post(url, data, config)
}