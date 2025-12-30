# Google OAuth Setup-Anleitung

Diese Anleitung führt Sie durch alle notwendigen Schritte, um Google OAuth für diese Anwendung einzurichten.

## Voraussetzungen
- Google-Konto: benningersventek@googlemail.com
- Zugriff auf die Google Cloud Console

## Schritt-für-Schritt Anleitung

### 1. Google Cloud Console öffnen
1. Gehen Sie zu [Google Cloud Console](https://console.cloud.google.com/)
2. Melden Sie sich mit Ihrem Google-Konto an: **benningersventek@googlemail.com**

### 2. Neues Projekt erstellen
1. Klicken Sie oben links auf das Projekt-Dropdown
2. Klicken Sie auf **"Neues Projekt"**
3. Geben Sie einen Projektnamen ein (z.B. "OAuth Test Google")
4. Klicken Sie auf **"Erstellen"**
5. Warten Sie, bis das Projekt erstellt wurde, und wählen Sie es aus

### 3. OAuth-Zustimmungsbildschirm konfigurieren
1. Gehen Sie im linken Menü zu **"APIs & Dienste"** → **"Zustimmungsbildschirm"**
2. Wählen Sie **"Extern"** aus (für Testzwecke) und klicken Sie auf **"Erstellen"**
3. Füllen Sie das Formular aus:
   - **App-Name**: OAuth Test Google (oder ein Name Ihrer Wahl)
   - **Benutzer-Support-E-Mail**: benningersventek@googlemail.com
   - **App-Logo**: (optional)
   - **App-Domäne**: (optional, für lokale Entwicklung nicht erforderlich)
   - **Autorisierte Domains**: (optional)
   - **Entwickler-Kontaktinformationen**: benningersventek@googlemail.com
4. Klicken Sie auf **"Speichern und fortfahren"**
5. Im Bereich **"Bereiche"** können Sie die Standard-Bereiche beibehalten (email, profile, openid)
6. Klicken Sie auf **"Speichern und fortfahren"**
7. Im Bereich **"Testbenutzer"** (wichtig für lokale Entwicklung):
   - Fügen Sie Ihre E-Mail-Adresse hinzu: **benningersventek@googlemail.com**
   - Klicken Sie auf **"Hinzufügen"**
8. Klicken Sie auf **"Speichern und fortfahren"**
9. Überprüfen Sie die Zusammenfassung und klicken Sie auf **"Zurück zum Dashboard"**

### 4. OAuth 2.0 Client-ID erstellen
1. Gehen Sie im linken Menü zu **"APIs & Dienste"** → **"Anmeldedaten"**
2. Klicken Sie oben auf **"+ ANMELDEDATEN ERSTELLEN"**
3. Wählen Sie **"OAuth-Client-ID"** aus
4. Falls Sie noch keinen OAuth-Zustimmungsbildschirm konfiguriert haben, werden Sie dazu aufgefordert (siehe Schritt 3)
5. Wählen Sie den **Anwendungstyp**: **"Webanwendung"**
6. Geben Sie einen **Namen** ein (z.B. "OAuth Test Web Client")
7. Unter **"Autorisierte JavaScript-Quellen"**:
   - Fügen Sie hinzu: `http://localhost:5173` (für Vite Development Server)
   - Fügen Sie hinzu: `http://localhost:3000` (falls Sie einen anderen Port verwenden)
8. Unter **"Autorisierte Weiterleitungs-URIs"**:
   - Fügen Sie hinzu: `http://localhost:5173` (für lokale Entwicklung)
   - Fügen Sie hinzu: `http://localhost:3000` (falls Sie einen anderen Port verwenden)
9. Klicken Sie auf **"Erstellen"**

### 5. Client-ID kopieren
1. Nach dem Erstellen wird ein Dialog mit Ihrer **Client-ID** angezeigt
2. **Kopieren Sie die Client-ID** (sie sieht aus wie: `123456789-abcdefghijklmnop.apps.googleusercontent.com`)
3. Klicken Sie auf **"OK"**

### 6. Client-ID in die Anwendung einfügen
1. Erstellen Sie eine `.env` Datei im Hauptverzeichnis des Projekts
2. Fügen Sie folgende Zeile ein:
   ```
   VITE_GOOGLE_CLIENT_ID=Ihre-Client-ID-hier
   ```
3. Ersetzen Sie `Ihre-Client-ID-hier` mit der kopierten Client-ID aus Schritt 5
4. Speichern Sie die Datei

### 7. Anwendung starten
1. Installieren Sie die Abhängigkeiten:
   ```bash
   npm install
   ```
2. Starten Sie den Development Server:
   ```bash
   npm run dev
   ```
3. Die Anwendung sollte jetzt unter `http://localhost:5173` erreichbar sein

## Wichtige Hinweise

### Für lokale Entwicklung:
- Die App läuft im **Testmodus**, daher können nur Testbenutzer sich anmelden
- Stellen Sie sicher, dass Ihre E-Mail-Adresse in den Testbenutzer hinzugefügt wurde (Schritt 3.7)

### Für Produktion:
- Sie müssen die App veröffentlichen (Veröffentlichungsprüfung durch Google)
- Fügen Sie Ihre Produktions-URLs zu den autorisierten JavaScript-Quellen und Weiterleitungs-URIs hinzu
- Erstellen Sie ggf. separate OAuth-Clients für Entwicklung und Produktion

### Sicherheit:
- **Niemals** die `.env` Datei in Git committen (sie ist bereits in `.gitignore`)
- Die Client-ID kann öffentlich sein, aber für Produktion sollten Sie zusätzliche Sicherheitsmaßnahmen implementieren

## Troubleshooting

### "Error 400: redirect_uri_mismatch"
- Stellen Sie sicher, dass die URL in den autorisierten Weiterleitungs-URIs genau übereinstimmt
- Prüfen Sie, ob `http://` vs `https://` korrekt ist

### "Error 403: access_denied"
- Stellen Sie sicher, dass Ihre E-Mail-Adresse in den Testbenutzer hinzugefügt wurde
- Prüfen Sie, ob der Zustimmungsbildschirm korrekt konfiguriert ist

### Login funktioniert nicht
- Prüfen Sie die Browser-Konsole auf Fehlermeldungen
- Stellen Sie sicher, dass die Client-ID in der `.env` Datei korrekt ist
- Starten Sie den Development Server neu nach Änderungen an der `.env` Datei

