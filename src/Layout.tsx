import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-darkBlue-800 to-primaryOrange min-h-screen w-full opacity-90">
      <div className="w-full h-full bg-black bg-opacity-25 min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
