import SlackIntro from "@/components/home/intro";
import Navbar from "@/components/shared/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useState } from "react";

const RootComponent = () => {
  const [animationEnd, setAnimationEnd] = useState(false);

  return (
    <>
      <SlackIntro
        animationEnd={animationEnd}
        setAnimationEnd={setAnimationEnd}
      />
      <div className="bg-black overscroll-none">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
