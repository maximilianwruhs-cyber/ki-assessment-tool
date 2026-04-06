# 🎯 KI-Readiness Assessment Tool

**Strategische KI-Reife-Analyse für Unternehmen — in 5 Minuten.**

Ein Open-Source Consulting-Tool, das KMUs, Startups und Enterprises durch eine strukturierte Selbstbewertung führt und einen vollständigen KI-Readiness Report mit konkretem Aktionsplan generiert.

> Kein Login. Keine Cloud. Keine Abhängigkeiten. 100% offline-fähig.

---

## ⚡ Quickstart

```bash
# Option 1: Einfach öffnen
# index.html im Browser öffnen — fertig.

# Option 2: Klonen
git clone https://github.com/maximilianwruhs-cyber/ki-assessment-tool.git
cd ki-assessment-tool
# index.html doppelklicken oder:
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

**Keine Installation nötig.** Kein Node.js, kein Python, kein Docker. Nur ein Browser.

---

## 🧩 Was das Tool macht

| Schritt | Beschreibung |
|---|---|
| **1. Eingabe** | Firmenname, Unternehmensphase (Startup/KMU/Enterprise), Datum |
| **2. Assessment** | 15 Multiple-Choice-Fragen über 6 Module mit optionalen Freitext-Notizen |
| **3. Report** | Automatisch generierter PDF-fähiger Consulting-Report |

### Die 6 Module

- 🎯 **Pre-Assessment** — KI-Reifegrad
- 📐 **Strategie** — Ziele, Budget, KPIs, Dringlichkeit
- ⚙️ **Prozesse** — Workflows, Flaschenhälse, manuelle Last
- 🗄️ **Daten & IT** — Datenspeicher, Qualität, Sensibilität
- 🤝 **Kultur** — KI-Kompetenz, Team-Akzeptanz
- 🛡️ **Compliance** — DSGVO, Transparenz, AI Act Readiness

---

## 📊 Was der Report enthält

- **Overall Score** (0–3.0) mit animiertem Counter
- **Branchen-Benchmark** — Vergleich mit Durchschnittswerten
- **Executive Summary** — Top 3 Prioritäten mit Dringlichkeits-Flags
- **Radar Chart** — Visuelle Stärken/Schwächen-Analyse
- **ROI-Schätzung** — Jährliches Einsparpotenzial basierend auf Antworten
- **Octalysis Engagement-Profil** — 8 Core Drives Motivationsanalyse
- **Setup-Plan** — Konkrete Open-Source-Tools mit Wochenplan
- **Sovereign AI Rahmen** — Strategische Einordnung (DSGVO, AI Act, DFA)
- **Detailergebnisse** — Alle Antworten mit Ampelbewertung

---

## 🛠️ Empfohlene Open-Source-Tools

Das Tool empfiehlt basierend auf den Antworten automatisch passende Tools:

| Tool | Zweck |
|---|---|
| [Twenty CRM](https://twenty.com) | Kontakte, Deals & Pipeline |
| [Nextcloud](https://nextcloud.com) | Dateien, Kalender, Zusammenarbeit |
| [n8n](https://n8n.io) | Workflow-Automatisierung |
| [Ollama + Open WebUI](https://ollama.com) | Lokale KI (LLMs), 100% privat |
| [Outline](https://getoutline.com) | Team-Wiki mit KI-Suche |
| [Paperless-ngx](https://docs.paperless-ngx.com) | KI-Dokumentenverwaltung |
| [Listmonk](https://listmonk.app) | Newsletter & E-Mail-Outreach |

---

## 🎮 Gamification & UX

Das Tool nutzt ethische Gamification (White Hat, Octalysis Framework):

- 🎉 **Confetti-Animation** bei Report-Generierung
- 📈 **Live Score-Pulses** auf den Modul-Tabs
- 🏷️ **Maturity Toasts** — sofortiges Feedback pro Antwort
- 🔄 **Slide-Transitions** zwischen Fragen
- 📊 **Animierter Progress-Bar** mit Prozentanzeige
- 🧮 **Animierter Score-Counter** im Report

---

## 🏗️ Technik

```
assessment-tool/
├── index.html    # Struktur (Landing, Assessment, Report)
├── style.css     # Design-System (Dark Mode, Glassmorphism)
└── app.js        # Engine (Scoring, Charts, Report-Generator)
```

- **Zero Dependencies** — kein Framework, kein Build-Tool
- **~50 KB** Gesamtgröße
- **Offline-first** — funktioniert ohne Internet
- **Print-ready** — Report direkt als PDF druckbar
- **Responsive** — funktioniert auf Desktop & Tablet
- **Fortschritt wird im localStorage gespeichert**

---

## 📄 Lizenz

MIT — frei nutzbar, auch kommerziell.

---

## 👤 Autor

**MW AI Solutions** — Strategische KI-Beratung für den Mittelstand.

Fokus: Sovereign AI · Open Source · Datensouveränität
