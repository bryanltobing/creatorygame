import { useState, useCallback } from 'react'

type RequestState = {
  loading: boolean
  error?: string
  success?: string
  setError: (error: string) => void
  resetError: () => void
  setSuccess: (success: string) => void
  start: () => void
  end: () => void
}

const useRequestState = (): RequestState => {
  const [loading, setLoading] = useState(false)
  const [error, setErrorState] = useState<string>()
  const [success, setSuccessState] = useState<string>()
  const start = useCallback(() => {
    setLoading(true)
    setErrorState(undefined)
  }, [])
  const end = useCallback(() => {
    setLoading(false)
  }, [])
  const setError = useCallback((msg: string) => {
    setErrorState(msg)
  }, [])
  const resetError = useCallback(() => {
    setErrorState(undefined)
  }, [])
  const setSuccess = useCallback((msg: string) => {
    setSuccessState(msg)
  }, [])
  return {
    loading,
    error,
    success,
    setError,
    resetError,
    setSuccess,
    start,
    end,
  }
}

export default useRequestState
