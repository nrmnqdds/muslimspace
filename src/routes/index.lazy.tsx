import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/shared/button";
import { MapPin, Settings, Heart, MapIcon, Plane } from "lucide-react";
import SlackIntro from "@/components/home/intro";

export const Route = createLazyFileRoute("/")({
  component: HomeScreen,
});

function HomeScreen() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="h-6 w-12 bg-white/20 rounded-full" />
            <span className="text-sm">MuslimSpace</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Explore applications
          </h1>
          <p className="text-gray-400">
            Escape to Paradise: Unlock a World of Adventure and Wonder
          </p>

          <div className="flex items-center gap-4 mt-8 md:mt-12">
            <div className="flex items-center">
              <div className="bg-yellow-400 rounded-full p-2">
                <span className="font-bold">5.0</span>
              </div>
              <div className="w-10 h-10 bg-gray-600 rounded-full -ml-2" />
            </div>
            <div>
              <div className="font-bold">HIGH RATING</div>
              <div className="text-sm text-gray-400">REVIEWS</div>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0">
          {/* Hero Card */}
          <div className="col-span-1 md:col-span-2 bg-stone-300 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute top-6 left-6">
              <div className="bg-black rounded-lg p-2">
                <span className="text-2xl font-bold">A</span>
              </div>
            </div>
            <div className="max-w-xs mt-20">
              <div className="text-black/60 mb-2">New Places:</div>
              <h2 className="text-2xl font-bold text-black">
                Time to unleash the Explorer of new within you
              </h2>
              <Button className="mt-4 bg-black text-white rounded-full">
                Explore Destination
              </Button>
            </div>
          </div>

          {/* Hotels Card */}
          <div className="bg-yellow-400 rounded-3xl p-6">
            <Button variant="outline" className="mb-4 rounded-full">
              Hotels
            </Button>
            <div className="text-black/60">/2023</div>
            <div className="text-black mt-2">5-STAR</div>
            <div className="text-4xl md:text-6xl font-bold text-black">
              700+
            </div>
          </div>

          {/* Flights Card */}
          <div className="bg-emerald-800 rounded-3xl p-6 relative">
            <Button variant="outline" className="mb-4 rounded-full">
              Flights
            </Button>
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <Plane className="w-20 md:w-32 h-20 md:h-32 rotate-45" />
            </div>
          </div>

          {/* Recommended Places Card */}
          <div className="bg-stone-400 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-4">Recomended Places</h3>
            <MapPin className="w-8 h-8" />
          </div>

          {/* Reviews Card */}
          <div className="bg-stone-200 rounded-3xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-black">Reviews</h3>
                <div className="text-3xl font-bold text-black mt-2">1K+</div>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="text-sm text-black">— Hotels/Apartments</div>
              <div className="text-sm text-black">— Local Food</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
