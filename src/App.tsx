import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/marketing/Home'
import Dashboard from './routes/app/Dashboard'
import { useAuthContext } from './contexts/AuthContext'

function App() {
  const { loading } = useAuthContext()

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
      </div>
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
