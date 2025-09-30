import heroImage from "@/assets/hero-water.jpg";

const Hero = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Groundwater Data Intelligence
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Interactive visualization and AI-powered insights from INGRES groundwater dataset
          </p>
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold text-white">28</div>
              <div className="text-sm text-white/80">States Monitored</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold text-white">2024</div>
              <div className="text-sm text-white/80">Latest Data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
