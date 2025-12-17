import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Wrench,
  Train,
  MapPin,
  Battery,
  Thermometer,
  Zap,
  Settings
} from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  color: string;
}

interface FleetItem {
  id: string;
  name: string;
  status: 'operational' | 'maintenance' | 'critical';
  location: string;
  nextMaintenance: string;
  efficiency: number;
}

interface MaintenanceAlert {
  id: string;
  component: string;
  probability: number;
  timeframe: string;
  severity: 'low' | 'medium' | 'high';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, trend, icon, color }) => {
  const trendColor = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500';
  
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-white mt-1">{value}</p>
            <p className={cn("text-sm mt-1", trendColor)}>
              {change}
            </p>
          </div>
          <div className={cn("p-3 rounded-lg", color)}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProbabilityChart: React.FC<{ alerts: MaintenanceAlert[] }> = ({ alerts }) => {
  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <h3 className="text-lg font-semibold text-white">Fehlerwahrscheinlichkeiten</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-300">{alert.component}</span>
                <span className="text-sm font-medium text-white">{alert.probability.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={cn(
                    "h-2 rounded-full transition-all duration-1000",
                    alert.probability >= 70 ? 'bg-red-500' :
                    alert.probability >= 40 ? 'bg-orange-500' : 'bg-green-500'
                  )}
                  style={{ width: `${alert.probability}%` }}
                />
              </div>
              <p className="text-xs text-gray-400">Zeitrahmen: {alert.timeframe}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const FleetStatus: React.FC<{ fleet: FleetItem[] }> = ({ fleet }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'maintenance': return 'bg-yellow-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational': return 'Betriebsbereit';
      case 'maintenance': return 'Wartung';
      case 'critical': return 'Kritisch';
      default: return 'Unbekannt';
    }
  };

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardHeader>
        <h3 className="text-lg font-semibold text-white">Flottenstatus</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {fleet.map((item) => (
            <div key={item.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Train className="h-5 w-5 text-blue-400" />
                  <span className="font-medium text-white">{item.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={cn("w-2 h-2 rounded-full", getStatusColor(item.status))} />
                  <span className="text-sm text-gray-300">{getStatusText(item.status)}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">{item.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">{item.nextMaintenance}</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Effizienz</span>
                  <span className="text-xs text-white">{item.efficiency.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div 
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-1000",
                      item.efficiency >= 90 ? 'bg-green-500' :
                      item.efficiency >= 70 ? 'bg-yellow-500' : 'bg-orange-500'
                    )}
                    style={{ width: `${item.efficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const SmartMaintenanceDashboard: React.FC = () => {
  const isMobile = useIsMobile();
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [animationKey, setAnimationKey] = useState(0);

  const kpis = [
    {
      title: 'Verfügbarkeit',
      value: '98.7%',
      change: '+2.1% vs. Vormonat',
      trend: 'up' as const,
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      color: 'bg-green-500/20'
    },
    {
      title: 'Wartungskosten',
      value: 'CHF 127k',
      change: '-15.3% vs. Vormonat',
      trend: 'down' as const,
      icon: <Wrench className="h-6 w-6 text-white" />,
      color: 'bg-blue-500/20'
    },
    {
      title: 'Kritische Alerts',
      value: '3',
      change: '-2 seit gestern',
      trend: 'down' as const,
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      color: 'bg-red-500/20'
    },
    {
      title: 'Flotteneffizienz',
      value: '94.2%',
      change: '+5.7% vs. Vormonat',
      trend: 'up' as const,
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: 'bg-emerald-500/20'
    }
  ];

  const [maintenanceAlerts, setMaintenanceAlerts] = useState<MaintenanceAlert[]>([
    {
      id: '1',
      component: 'Bremsanlage Zug A-301',
      probability: 78,
      timeframe: '7-14 Tage',
      severity: 'high'
    },
    {
      id: '2',
      component: 'Klimaanlage Zug B-205',
      probability: 45,
      timeframe: '2-3 Wochen',
      severity: 'medium'
    },
    {
      id: '3',
      component: 'Türsystem Zug C-102',
      probability: 23,
      timeframe: '4-6 Wochen',
      severity: 'low'
    }
  ]);

  const [fleetData, setFleetData] = useState<FleetItem[]>([
    {
      id: '1',
      name: 'ICE 401',
      status: 'operational',
      location: 'Basel SBB',
      nextMaintenance: '17.12.2025',
      efficiency: 96
    },
    {
      id: '2',
      name: 'RE 32',
      status: 'maintenance',
      location: 'Werk Olten',
      nextMaintenance: 'In Wartung',
      efficiency: 0
    },
    {
      id: '3',
      name: 'S-Bahn 442',
      status: 'operational',
      location: 'Zürich HB',
      nextMaintenance: '21.12.2025',
      efficiency: 92
    },
    {
      id: '4',
      name: 'Cargo 185',
      status: 'critical',
      location: 'Köln Ehrenfeld',
      nextMaintenance: 'Sofort',
      efficiency: 67
    }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMaintenanceAlerts(prev => prev.map(alert => ({
        ...alert,
        probability: Math.max(0, Math.min(100, alert.probability + (Math.random() - 0.5) * 4))
      })));

      setFleetData(prev => prev.map(item => ({
        ...item,
        efficiency: item.status === 'operational' 
          ? Math.max(80, Math.min(100, item.efficiency + (Math.random() - 0.5) * 6))
          : item.efficiency
      })));

      setAnimationKey(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const timeframes = [
    { value: '1h', label: '1 Stunde' },
    { value: '24h', label: '24 Stunden' },
    { value: '7d', label: '7 Tage' },
    { value: '30d', label: '30 Tage' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Smart Maintenance 360°
            <span className="block text-2xl md:text-3xl text-blue-400 mt-2">
              Intelligentes Wartungsmanagement
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Erleben Sie die Zukunft der Instandhaltung mit KI-gestützter Predictive Maintenance 
            und Echtzeit-Flottenüberwachung
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe.value}
              variant={selectedTimeframe === timeframe.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTimeframe(timeframe.value)}
              className={cn(
                "transition-all duration-200",
                selectedTimeframe === timeframe.value
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"
              )}
            >
              {timeframe.label}
            </Button>
          ))}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <KPICard {...kpi} />
            </div>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className={cn(
          "grid gap-8 mb-12",
          isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
        )}>
          {/* Probability Chart */}
          <div className="transform transition-all duration-500 hover:scale-[1.02]">
            <ProbabilityChart alerts={maintenanceAlerts} />
          </div>

          {/* Fleet Status */}
          <div className="transform transition-all duration-500 hover:scale-[1.02]">
            <FleetStatus fleet={fleetData} />
          </div>
        </div>

        {/* Real-time Monitoring Section */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12">
          <CardHeader>
            <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-400" />
              <span>Echtzeit-Sensorüberwachung</span>
            </h3>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Temperature Monitoring */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="h-5 w-5 text-red-400" />
                    <span className="text-white font-medium">Temperatur</span>
                  </div>
                  <span className="text-2xl font-bold text-white">67°C</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: '67%' }} />
                </div>
                <p className="text-xs text-gray-400">Motor Zug ICE 401</p>
              </div>

              {/* Battery Status */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Battery className="h-5 w-5 text-green-400" />
                    <span className="text-white font-medium">Batterie</span>
                  </div>
                  <span className="text-2xl font-bold text-white">89%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '89%' }} />
                </div>
                <p className="text-xs text-gray-400">Backup-System RE 3205</p>
              </div>

              {/* Power Consumption */}
              <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-400" />
                    <span className="text-white font-medium">Leistung</span>
                  </div>
                  <span className="text-2xl font-bold text-white">4.2kW</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '42%' }} />
                </div>
                <p className="text-xs text-gray-400">Verbrauch S-Bahn 442</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              <Settings className="mr-2 h-5 w-5" />
              Dashboard Konfigurieren
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              Detailanalyse Anzeigen
            </Button>
          </div>
          <p className="text-gray-400 mt-4 text-sm">
            Live-Demo • Daten werden alle 2 Sekunden aktualisiert
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartMaintenanceDashboard;
