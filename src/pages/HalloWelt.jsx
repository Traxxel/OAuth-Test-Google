import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HalloWelt.css'

function HalloWelt() {
  const { isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return (
      <div className="hallo-welt-container">
        <div className="content">Lade...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="hallo-welt-container">
      <div className="content">
        <h1>Hallo Welt!</h1>
        <p className="message">Willkommen auf der Hallo-Welt-Seite.</p>
        <Link to="/" className="back-link">
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}

export default HalloWelt

