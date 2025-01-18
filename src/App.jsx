import React, { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { text: input, timestamp: new Date().toLocaleTimeString() }])
      setInput('')
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-header">
        RetroChat v1.0.0
      </div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            <span className="timestamp">[{msg.timestamp}]</span> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <span className="prompt">&gt;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
      </form>
    </div>
  )
}

export default App
