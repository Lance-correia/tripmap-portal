
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import TripCard from "@/components/TripCard";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";

const Home = () => {
  const featuredDestinations = [
    {
      name: "Iceland",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Norway",
      image: "https://images.unsplash.com/photo-1517904518766-d1cf13d350a7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const featuredTrips = [
    {
      id: 1,
      title: "Northern Lights Explorer",
      destination: "Iceland",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
      duration: "7 days",
      groupSize: "8-12",
      date: "Oct 15, 2023",
      price: "1,299",
      status: "past" as const,
    },
    {
      id: 2,
      title: "Fjords & Mountains",
      destination: "Norway",
      image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80",
      duration: "10 days",
      groupSize: "6-10",
      date: "Apr 5, 2024",
      price: "1,599",
      status: "available" as const,
    },
    {
      id: 3,
      title: "Alpine Adventure",
      destination: "New Zealand",
      image: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=80",
      duration: "12 days",
      groupSize: "8-14",
      date: "Mar 20, 2024",
      price: "2,399",
      status: "available" as const,
    },
  ];

  return (
    <div>
      <Hero
        title="Discover Amazing Places"
        subtitle="the journey of a lifetime"
        description="Let us make your dreams true and offer you an unforgettable travel experience to lands of vivid contrasts of nature, geography and culture."
        image="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Featured Destinations */}
      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Top Destinations"
          subtitle="Explore our carefully selected destinations that offer unforgettable experiences"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((destination, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden h-60 cursor-pointer">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gold mr-1" />
                  <h3 className="text-lg font-medium text-white">{destination.name}</h3>
                </div>
                <div className="mt-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button asChild variant="outline" size="sm" className="bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                    <Link to="/trips">Explore Trips</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="Featured Trips"
            subtitle="Discover our most popular travel experiences"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrips.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link to="/trips" className="flex items-center">
                View All Trips
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle
            title="What Our Travelers Say"
            subtitle="Read the experiences of travelers who have embarked on our journeys"
          />

          <div className="max-w-4xl mx-auto bg-slate-50 p-8 rounded-lg border border-slate-100">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
                  alt="Customer"
                  className="h-full w-full object-cover"
                />
              </div>
              <blockquote className="text-lg italic text-slate-700 mb-6">
                "The Iceland tour exceeded all our expectations. The guide was incredibly knowledgeable and showed us hidden gems we would have never discovered on our own. It truly was the trip of a lifetime."
              </blockquote>
              <cite className="not-italic">
                <span className="block font-semibold text-slate-900">Sarah Johnson</span>
                <span className="text-sm text-slate-500">Northern Lights Explorer, October 2023</span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready For Your Next Adventure?
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300 mb-8">
            Start planning your dream trip today. Our travel experts are ready to help you create the perfect itinerary tailored to your preferences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
