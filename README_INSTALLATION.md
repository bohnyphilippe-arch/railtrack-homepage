# railTRACK Smart Services - Datengetriebene Innovation

Eine innovative Website-Simulation der railTRACK AG Transformation zum Mobility-Intelligence-Provider.

## 🚀 Projektübersicht

Diese Website demonstriert die datengetriebenen Services von railTRACK AG:
- **Smart Maintenance 360°**: Digitales Wartungsökosystem mit KI-gestützter Predictive Maintenance
- **railTRACK Insights**: Nachhaltigkeits-Portal für Performance und CO₂-Monitoring
- **Data Lake Visualisierung**: Interaktive Darstellung der Datenarchitektur
- **Innovations-Showcase**: NeuroRail Orchestrator und Green Ledger Certification

## 🛠️ Installation & Setup

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder pnpm

### Schritt-für-Schritt Installation

1. **Projekt entpacken**
   ```bash
   unzip railtrack_smart_services_complete.zip
   cd service_angebot_simulation
   ```

2. **Abhängigkeiten installieren**
   ```bash
   npm install
   # oder
   pnpm install
   ```

3. **Entwicklungsserver starten**
   ```bash
   npm run dev
   # oder
   pnpm dev
   ```

4. **Website öffnen**
   - Öffnen Sie http://localhost:5173 in Ihrem Browser

### Produktions-Build erstellen

```bash
npm run build
# oder
pnpm build
```

## 📁 Projektstruktur

```
service_angebot_simulation/
├── src/
│   ├── components/           # React Komponenten
│   │   ├── Header.tsx       # Navigation
│   │   ├── HeroSection.tsx  # Hero-Bereich
│   │   ├── SmartMaintenanceDashboard.tsx  # Smart Maintenance Demo
│   │   ├── RailTrackInsights.tsx          # Insights Portal
│   │   ├── InnovationShowcase.tsx         # Innovation Features
│   │   ├── DataLakeVisualization.tsx      # Data Lake Demo
│   │   ├── BusinessModelSection.tsx       # Geschäftsmodelle
│   │   └── Footer.tsx       # Footer
│   ├── pages/
│   │   └── Index.tsx        # Hauptseite
│   ├── components/ui/       # UI Komponenten (shadcn/ui)
│   ├── lib/                 # Utilities
│   └── index.css           # Styles & Design System
├── public/
│   └── images/             # Dashboard Mockups
└── package.json
```

## 🎨 Design System

Das Projekt verwendet ein maßgeschneidertes Design System mit:
- **Primärfarben**: railTRACK Blau (#0066CC)
- **Sekundärfarben**: Smart Grün (#16A085)
- **Akzentfarben**: Innovation Orange (#FF6B35)
- **Animationen**: Float, Glow, Data-Flow Effekte
- **Responsive Design**: Mobile-first Ansatz

## 🔧 Technologie-Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **UI Components**: shadcn/ui
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Charts**: Recharts

## 📊 Features

### Smart Maintenance 360°
- Interaktive KPI-Dashboards
- Fehlerwahrscheinlichkeits-Diagramme
- Flottenstatus-Visualisierung
- Top 5 Komponenten mit Anomalien

### railTRACK Insights
- CO₂-Emissions-Tracking
- Energieeffizienz-Monitoring
- Pünktlichkeits-Metriken
- Nachhaltigkeits-KPIs

### Data Lake Visualisierung
- Raw Zone → Curated Zone → Consumption Zone
- Interaktive Datenfluss-Animation
- Architektur-Diagramme

## 🚀 Deployment

Die Website ist bereits live unter: https://an43p79df4.skywork.website

Für eigenes Deployment:
1. Build erstellen: `npm run build`
2. `dist/` Ordner auf Webserver hochladen

## 📝 Lizenz

Dieses Projekt wurde für die Abschlusspräsentation von Philippe Bohny erstellt.
Basiert auf der Semesterarbeit "Datengetriebene Services für railTRACK AG".

## 🤝 Kontakt

Bei Fragen zur Implementierung oder weiteren Entwicklung kontaktieren Sie bitte den Projektersteller.

---

**Erstellt mit ❤️ für die railTRACK AG Innovation Initiative**
