import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterControls from "@/components/FilterControls";
import IndiaMap from "@/components/IndiaMap";
import DataCharts from "@/components/DataCharts";
import BhujalChatbot from "@/components/BhujalChatbot";

const Index = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedState, setSelectedState] = useState("All States");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Hero />
        
        <div className="container mx-auto px-4 py-12 space-y-8">
          <FilterControls
            selectedYear={selectedYear}
            selectedState={selectedState}
            onYearChange={setSelectedYear}
            onStateChange={setSelectedState}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <IndiaMap />
              <DataCharts />
            </div>
            
            <div>
              <BhujalChatbot />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
