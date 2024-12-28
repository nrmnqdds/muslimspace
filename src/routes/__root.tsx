import Intro from "@src/components/home/intro";
import Navbar from "@src/components/shared/navbar";
import { useIntro } from "@src/hooks/use-intro";
import { Outlet, createRootRoute } from "@tanstack/react-router";

const RootComponent = () => {
	const { animationEnd, setAnimationEnd, animationExit, setAnimationExit } =
		useIntro();

	return (
		<>
			<Intro
				animationEnd={animationEnd}
				setAnimationEnd={setAnimationEnd}
				animationExit={animationExit}
				setAnimationExit={setAnimationExit}
			/>
			{animationExit && (
				<div className="bg-black overscroll-none font-inter">
					{/* <Navbar /> */}
					<Outlet />
				</div>
			)}
		</>
	);
};

export const Route = createRootRoute({
	component: RootComponent,
});
