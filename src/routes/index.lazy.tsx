import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@src/components/shared/button";
import { motion } from "motion/react";
import { GithubButton } from "@src/components/home/github-button";
import { useTopStars } from "@src/hooks/use-top-stars";
import { Star } from "lucide-react";
import MovingGradient from "@src/components/shared/moving-gradient";
import { FlickeringGrid } from "@src/components/shared/flickering-grid";

export const Route = createLazyFileRoute("/")({
  component: HomeScreen,
});

function HomeScreen() {
  const { data, isLoading } = useTopStars({ limit: 5 });

  const MotionMovingGradient = motion(MovingGradient);

  return (
    <div className="min-h-screen bg-black text-white">
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.3}
        flickerChance={0.1}
        height={800}
        width={800}
      />
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6 z-10">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4">
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <div className="h-6 w-12 bg-white/20 rounded-full" />
            <span className="text-sm">MuslimSpace</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.7 },
              animation: "ease-in-out",
            }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-4 md:mb-6"
          >
            Explore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8 },
              animation: "ease-in-out",
            }}
            className="text-gray-400"
          >
            Aggregator for MY made muslim app.
          </motion.p>
          <GithubButton />
        </div>

        {/* Bento Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-0">
          {isLoading ? (
            // Skeleton Loading State
            <>
              <div className="col-span-1 md:col-span-2 bg-stone-800/50 rounded-3xl p-6 relative overflow-hidden animate-pulse">
                <div className="h-10 w-48 bg-stone-700/50 rounded-lg mb-14" />
                <div className="space-y-4 max-w-xs">
                  <div className="h-4 w-32 bg-stone-700/50 rounded-full" />
                  <div className="h-10 w-36 bg-stone-700/50 rounded-full" />
                  <div className="h-10 w-36 bg-stone-700/50 rounded-full" />
                </div>
              </div>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-stone-800/50 rounded-3xl p-6 relative overflow-hidden animate-pulse"
                >
                  <div className="h-10 w-40 bg-stone-700/50 rounded-lg mb-14" />
                  <div className="space-y-4 max-w-xs">
                    <div className="h-4 w-32 bg-stone-700/50 rounded-full" />
                    <div className="h-10 w-36 bg-stone-700/50 rounded-full" />
                    <div className="h-10 w-36 bg-stone-700/50 rounded-full" />
                  </div>
                </div>
              ))}
            </>
          ) : (
            data.map((service, index) => {
              const colors = [
                "from-stone-500 via-stone-700 to-yellow-500", // Hero card
                "from-yellow-500 via-yellow-700",
                "from-emerald-500 via-emerald-700 to-cyan-500",
                "from-red-500 via-red-700 to-purple-500",
                "from-stone-700 via-stone-700 to-yellow-500",
              ];

              return (
                <MotionMovingGradient
                  key={service.data.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.05 },
                    animation: "ease-in-out",
                  }}
                  className={`${
                    index === 0 ? "col-span-1 md:col-span-2" : ""
                  } rounded-3xl relative overflow-hidden`}
                  gradientClassName={colors[index]}
                >
                  <div className="p-6">
                    <div className="absolute top-6 left-6">
                      <span className="text-black text-2xl font-bold">
                        {service.data.name}
                      </span>
                    </div>
                    <div className="max-w-xs mt-20">
                      <div
                        className={`${index === 2 ? "text-white/60" : "text-black/60"} mb-2 space-y-2`}
                      >
                        <div className="flex flex-col items-start justify-center gap-2">
                          <img
                            src={service.data.owner.avatar_url}
                            alt={service.data.owner.login}
                            className="size-6 rounded-full inline-block"
                          />
                          <span>{service.data.owner.login}</span>{" "}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {service.data.stargazers_count.toLocaleString()}
                        </div>
                      </div>
                      <Link
                        to={service.data.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="mt-4 bg-black text-white rounded-full">
                          Visit Website
                        </Button>
                      </Link>
                      <Link
                        to={service.data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-2"
                      >
                        <Button variant="outline" className="rounded-full">
                          View on GitHub
                        </Button>
                      </Link>
                    </div>
                    {/* {service.image_url && ( */}
                    {/*   <div */}
                    {/*     className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center opacity-20" */}
                    {/*     style={{ backgroundImage: `url(${service.image_url})` }} */}
                    {/*   /> */}
                    {/* )} */}
                  </div>
                </MotionMovingGradient>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
