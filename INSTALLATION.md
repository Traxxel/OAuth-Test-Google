# Installation von Node.js und npm

## Problem
Node.js und npm sind auf Ihrem System nicht installiert oder nicht im PATH verfügbar.

## Lösung: Node.js installieren

### Option 1: Offizieller Installer (Empfohlen)

1. **Node.js herunterladen:**
   - Gehen Sie zu: https://nodejs.org/
   - Laden Sie die **LTS-Version** (Long Term Support) herunter
   - Wählen Sie die Windows-Installer-Version (.msi)

2. **Installation durchführen:**
   - Führen Sie den heruntergeladenen Installer aus
   - Folgen Sie dem Installationsassistenten
   - **Wichtig:** Stellen Sie sicher, dass die Option "Add to PATH" aktiviert ist (sollte standardmäßig aktiviert sein)

3. **Installation überprüfen:**
   - Schließen Sie PowerShell/Terminal und öffnen Sie es neu
   - Führen Sie aus:
     ```powershell
     node --version
     npm --version
     ```
   - Beide Befehle sollten Versionsnummern anzeigen

### Option 2: Über Chocolatey (falls installiert)

Falls Sie Chocolatey installiert haben:
```powershell
choco install nodejs
```

### Option 3: Über winget (Windows 10/11)

```powershell
winget install OpenJS.NodeJS.LTS
```

## Nach der Installation

1. **PowerShell/Terminal neu starten** (wichtig, damit PATH aktualisiert wird)

2. **Im Projektverzeichnis navigieren:**
   ```powershell
   cd C:\Users\stefa\repos\GitHub\OAuth-Test-Google
   ```

3. **Dependencies installieren:**
   ```powershell
   npm install
   ```

4. **Development Server starten:**
   ```powershell
   npm run dev
   ```

## Troubleshooting

### "npm wird nicht erkannt" nach Installation
- Schließen Sie alle PowerShell/Terminal-Fenster
- Öffnen Sie ein neues Terminal
- Falls es immer noch nicht funktioniert, überprüfen Sie den PATH:
  ```powershell
  $env:PATH
  ```
  Sollte `C:\Program Files\nodejs\` enthalten

### PATH manuell hinzufügen (falls nötig)
1. Windows-Taste + R drücken
2. `sysdm.cpl` eingeben und Enter
3. Registerkarte "Erweitert" → "Umgebungsvariablen"
4. Unter "Systemvariablen" → "Path" auswählen → "Bearbeiten"
5. "Neu" → `C:\Program Files\nodejs\` hinzufügen
6. Alle Dialoge mit "OK" schließen
7. PowerShell/Terminal neu starten

