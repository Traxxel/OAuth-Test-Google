# OAuth Test Google

Eine minimale Web-Anwendung mit Google OAuth Integration.

## Features

- Home-Seite mit Gruß
- "Hallo Welt"-Seite (nur für angemeldete Benutzer)
- Google OAuth Login
- Bedingte Navigation basierend auf Authentifizierungsstatus

## Installation

1. Abhängigkeiten installieren:
```bash
npm install
```

2. `.env` Datei erstellen:
```bash
cp .env.example .env
```

3. Google Client-ID in `.env` eintragen (siehe `google.md` für detaillierte Anleitung)

4. Development Server starten:
```bash
npm run dev
```

Die Anwendung läuft dann unter `http://localhost:5173`

## Projektstruktur

```
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Home-Seite mit Login
│   │   └── HalloWelt.jsx      # Hallo-Welt-Seite
│   ├── context/
│   │   └── AuthContext.jsx   # OAuth Kontext
│   ├── App.jsx               # Hauptkomponente mit Routing
│   └── main.jsx              # Entry Point
├── google.md                 # Google OAuth Setup-Anleitung
└── package.json
```

## Google OAuth Setup

Folgen Sie der detaillierten Anleitung in `google.md`, um Google OAuth einzurichten.

