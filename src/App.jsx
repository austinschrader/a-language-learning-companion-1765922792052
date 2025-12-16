import React from 'react'
import ChatInterface from './components/ChatInterface'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <ChatInterface agentDescription="a language learning companion" />
    </div>
  )
}

export default App
