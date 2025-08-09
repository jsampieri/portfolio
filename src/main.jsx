import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info)
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 24, color: '#fff', background: '#0b0b10', fontFamily: 'system-ui' }}>
          <h1 style={{ fontSize: 20, margin: 0 }}>Something went wrong.</h1>
          <p style={{ opacity: 0.7 }}>{String(this.state.error?.message || this.state.error)}</p>
          <p style={{ opacity: 0.7 }}>Check the console for details.</p>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
)
