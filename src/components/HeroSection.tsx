import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Train, Brain, TrendingUp, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-white/90 font-medium">Transformation in die Zukunft der Mobilität</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Von Zügen zu{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Mobility Intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              railTRACK AG transformiert sich vom traditionellen Zughersteller zum führenden 
              Mobility-Intelligence-Provider mit datengetriebenen Services der nächsten Generation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Unsere Vision entdecken
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Technologie erleben
              </Button>
            </div>
          </div>

          {/* Transformation Journey */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Traditional */}
            <div className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-4 group-hover:bg-white/10 transition-all duration-300">
                <Train className="w-12 h-12 text-white/60 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Traditionell</h3>
                <p className="text-white/70">Zughersteller mit Fokus auf Hardware und mechanische Systeme</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-emerald-400 animate-pulse" />
            </div>

            {/* Future */}
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-8 mb-4 group-hover:from-blue-500/30 group-hover:to-emerald-500/30 transition-all duration-300 shadow-xl">
                <Brain className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Zukunft</h3>
                <p className="text-white/90">Mobility-Intelligence-Provider mit KI-gestützten, datengetriebenen Services</p>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">360°</div>
              <div className="text-white/80 text-sm">Smart Maintenance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-white/80 text-sm">Echtzeitüberwachung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-white/80 text-sm">Effizienzsteigerung</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-white/80 text-sm">Skalierbarkeit</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;