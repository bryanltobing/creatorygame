import React from 'react'
import ReactDOM from 'react-dom'
import { SWRConfig } from 'swr'
import axios from 'axios'

import './index.css'
import App from './App'
import Layout from './Layout'

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (err: any) {
    throw err?.response.data
  }
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher,
        dedupingInterval: 10000,
      }}
    >
      <Layout>
        <App />
      </Layout>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
)
