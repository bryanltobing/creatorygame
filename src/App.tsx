import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'

const HomePage = React.lazy(() => import('pages/index'))
const CharacterDetailsPage = React.lazy(() => import('pages/character/slug'))

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} caseSensitive={true} />
        <Route
          path="/character/:slug"
          element={<CharacterDetailsPage />}
          caseSensitive={true}
        />
      </Routes>
    </>
  )
}

export default App
