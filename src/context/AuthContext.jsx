import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Prüfe ob User bereits eingeloggt ist (aus localStorage)
    const savedUser = localStorage.getItem('googleUser')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
        setIsAuthenticated(true)
      } catch (e) {
        localStorage.removeItem('googleUser')
      }
    }
    setIsLoading(false)

    // Google OAuth Script laden
    if (!window.google) {
      const script = document.createElement('script')
      script.src = 'https://accounts.google.com/gsi/client'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }, [])

  function setUserData(userData) {
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('googleUser', JSON.stringify(userData))
  }

  function logout() {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('googleUser')
    if (window.google && window.google.accounts) {
      window.google.accounts.id.disableAutoSelect()
    }
  }

  const value = {
    isAuthenticated,
    user,
    logout,
    isLoading,
    setUserData,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

