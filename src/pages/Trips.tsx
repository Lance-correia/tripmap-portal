
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import TripCard from "@/components/TripCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Trips = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTrips, setFilteredTrips] = useState<Array<any>>([]);
  
  const allTrips = [
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
    {
      id: 4,
      title: "Cherry Blossom Tour",
      destination: "Japan",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
      duration: "9 days",
      groupSize: "10-15",
      date: "Feb 10, 2023",
      price: "2,099",
      status: "past" as const,
    },
    {
      id: 5,
      title: "Golden Circle Experience",
      destination: "Iceland",
      image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=800&q=80",
      duration: "5 days",
      groupSize: "5-10",
      date: "Jun 25, 2024",
      price: "999",
      status: "available" as const,
    },
    {
      id: 6,
      title: "South Island Explorer",
      destination: "New Zealand",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=800&q=80",
      duration: "14 days",
      groupSize: "8-12",
      date: "Jan 8, 2023",
      price: "2,799",
      status: "past" as const,
    },
  ];

  const availableTrips = allTrips.filter((trip) => trip.status === "available");
  const pastTrips = allTrips.filter((trip) => trip.status === "past");

  useEffect(() => {
    setFilteredTrips(allTrips);
  }, []);

  const handleSearch = (tab: string) => {
    let trips;
    
    switch (tab) {
      case "all":
        trips = allTrips;
        break;
      case "available":
        trips = availableTrips;
        break;
      case "past":
        trips = pastTrips;
        break;
      default:
        trips = allTrips;
    }
    
    // Filter by search term
    if (searchTerm) {
      trips = trips.filter(
        (trip) =>
          trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTrips(trips);
  };

  return (
    <div>
      <Hero
        title="Our Trips"
        subtitle="explore our adventures"
        description="Discover our collection of carefully crafted trips to amazing destinations around the world."
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80"
        height="h-[60vh]"
      />

      <div className="container mx-auto px-4 md:px-6 py-16">
        <SectionTitle
          title="Discover Our Trips"
          subtitle="Browse through our past and upcoming adventures"
        />

        <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search by trip name or destination..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-grow"
                />
                <Button onClick={() => handleSearch("all")} size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Duration</SelectItem>
                  <SelectItem value="short">1-7 days</SelectItem>
                  <SelectItem value="medium">8-14 days</SelectItem>
                  <SelectItem value="long">15+ days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select defaultValue="any">
                <SelectTrigger>
                  <SelectValue placeholder="Destination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Destination</SelectItem>
                  <SelectItem value="iceland">Iceland</SelectItem>
                  <SelectItem value="norway">Norway</SelectItem>
                  <SelectItem value="newzealand">New Zealand</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={handleSearch}>
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Trips</TabsTrigger>
            <TabsTrigger value="available">Available Trips</TabsTrigger>
            <TabsTrigger value="past">Past Trips</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.length > 0 ? (
                filteredTrips.map((trip) => (
                  <TripCard key={trip.id} {...trip} />
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-slate-500">No trips found matching your criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="available" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.length > 0 ? (
                filteredTrips
                  .filter((trip) => trip.status === "available")
                  .map((trip) => <TripCard key={trip.id} {...trip} />)
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-slate-500">No available trips found matching your criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="past" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.length > 0 ? (
                filteredTrips
                  .filter((trip) => trip.status === "past")
                  .map((trip) => <TripCard key={trip.id} {...trip} />)
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-slate-500">No past trips found matching your criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Trips;
