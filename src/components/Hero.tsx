
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  showCta?: boolean;
  overlay?: boolean;
  height?: string;
}

const Hero = ({
  title,
  subtitle,
  description,
  image,
  showCta = true,
  overlay = true,
  height = "h-screen",
}: HeroProps) => {
  return (
    <div 
      className={`relative ${height} w-full bg-center bg-cover flex items-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}
      
      <div className="container relative mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        {subtitle && (
          <h2 className="text-gold font-light mb-3 md:mb-6 tracking-wide">
            {subtitle}
          </h2>
        )}
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white font-bold mb-4 md:mb-6">
          {title}
        </h1>
        
        {description && (
          <p className="max-w-xl text-white text-sm md:text-base lg:text-lg mx-auto md:mx-0 mb-8">
            {description}
          </p>
        )}
        
        {showCta && (
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg">
              <Link to="/trips">
                Explore Trips 
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
