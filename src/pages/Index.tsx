import NavigationSidebar from "@/components/NavigationSidebar";
import IntroductionSection from "@/components/IntroductionSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import DataLakeVisualization from "@/components/DataLakeVisualization";
import SmartMaintenanceDashboard from "@/components/SmartMaintenanceDashboard";
import ServiceInnovationSection from "@/components/ServiceInnovationSection";
import RailTrackInsights from "@/components/RailTrackInsights";
import ValueChainTransformation from "@/components/ValueChainTransformation";
// InnovationShowcase entfernt - redundant mit ServiceInnovationSection
// BusinessModelSection entfernt - redundant mit ValueChainTransformation
import ChallengesAndOpportunities from "@/components/ChallengesAndOpportunities";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Navigation Sidebar */}
      <NavigationSidebar />
      
      {/* Main Content with left margin for sidebar (only on desktop) */}
      <main className="ml-0 lg:ml-80">
        {/* a5.1 - Einleitung */}
        <IntroductionSection />
        
        {/* a5.2 - Predictive Maintenance & Data Lake */}
        <div id="predictive-maintenance">
          <ProblemStatementSection />
          <DataLakeVisualization />
          <SmartMaintenanceDashboard />
        </div>
        
        {/* a5.3 - Datengetriebene Services */}
        <div id="services">
          <ServiceInnovationSection />
          <RailTrackInsights />
          <ValueChainTransformation />
        </div>
        
        {/* a5.4 - Herausforderungen & Chancen */}
        <ChallengesAndOpportunities />
        
        {/* a5.5 - Fazit & Ausblick */}
        <Conclusion />
        
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
