
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TripCardProps {
  id: number;
  title: string;
  destination: string;
  image: string;
  duration: string;
  groupSize: string;
  date: string;
  price: string;
  status: "past" | "available";
}

const TripCard = ({
  id,
  title,
  destination,
  image,
  duration,
  groupSize,
  date,
  price,
  status,
}: TripCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge
          className={`absolute top-4 right-4 ${
            status === "past" ? "bg-slate-700" : "bg-gold"
          }`}
        >
          {status === "past" ? "Past Trip" : "Available"}
        </Badge>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-2">
          <MapPin className="h-4 w-4 text-gold mr-1" />
          <span className="text-sm text-slate-500">{destination}</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-slate-400 mr-1" />
            <span className="text-xs text-slate-500">{duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-slate-400 mr-1" />
            <span className="text-xs text-slate-500">{groupSize} people</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-slate-500">From</p>
            <p className="text-lg font-bold text-slate-900">${price}</p>
          </div>
          <Link
            to={`/trips/${id}`}
            className="text-sm font-medium text-gold hover:text-amber-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
