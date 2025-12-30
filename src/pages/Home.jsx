import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Home.css'

function Home() {
  const { isAuthenticated, user, logout, isLoading, setUserData } = useAuth()

  const handleLogin = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.oauth2.initTokenClient({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        scope: 'email profile openid',
        callback: (tokenResponse) => {
          // Token erhalten, jetzt User-Info abrufen
          fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              const userData = {
                email: data.email,
                name: data.name,
                picture: data.picture,
              }
              setUserData(userData)
            })
            .catch((error) => {
              console.error('Fehler beim Abrufen der User-Info:', error)
            })
        },
      }).requestAccessToken()
    }
  }

  if (isLoading) {
    return (
      <div className="home-container">
        <div className="content">Lade...</div>
      </div>
    )
  }

  return (
    <div className="home-container">
      <div className="content">
        <h1>Willkommen!</h1>
        <p className="greeting">Hallo und herzlich willkommen auf unserer Seite.</p>

        {!isAuthenticated ? (
          <div className="auth-section">
            <button onClick={handleLogin} className="login-button">
              Mit Google anmelden
            </button>
          </div>
        ) : (
          <div className="auth-section">
            <div className="user-info">
              {user?.picture && (
                <img src={user.picture} alt="Profil" className="profile-picture" />
              )}
              <div>
                <p className="user-name">Hallo, {user?.name || user?.email}!</p>
                <button onClick={logout} className="logout-button">
                  Abmelden
                </button>
              </div>
            </div>
            <div className="navigation">
              <Link to="/hallo-welt" className="nav-link">
                Zur Hallo-Welt-Seite
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

