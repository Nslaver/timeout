import React from 'react'

const Home = props => {
  const { className } = props
  return (
    <div className={className}>
      <header className="App-header">
        <h1 className="App-title">timeout</h1>
      </header>
      <p className="App-intro">Una aplicacion para programar </p>
      <footer>
        <div className="footer-button">icon / section</div>
        <div className="footer-button">icon / section</div>
        <div className="footer-button">icon / section</div>
      </footer>
    </div>
  )
}

export default Home
