import { Link } from "@tanstack/react-router";
import { Button } from "@src/components/shared/button";

const Navbar = () => {
	return (
		<header className="flex items-center justify-between p-4 md:p-6">
			<div className="flex items-center gap-2">
				<div className="h-8 w-8 bg-yellow-400 rounded-lg" />
				<span className="text-xl font-bold">WANDER</span>
			</div>
			<nav className="hidden md:flex items-center gap-8">
				<Link href="#" className="text-gray-300 hover:text-white">
					DESTINATIONS
				</Link>
				<Link href="#" className="text-gray-300 hover:text-white">
					SERVICES
				</Link>
				<Link href="#" className="text-gray-300 hover:text-white">
					SUPPORT
				</Link>
			</nav>
			{/* <div className="flex items-center gap-4"> */}
			{/*   <Button variant="outline" className="rounded-full hidden md:flex"> */}
			{/*     TRY APP */}
			{/*   </Button> */}
			{/*   <Button size="icon" className="md:hidden"> */}
			{/*     <Menu className="h-6 w-6" /> */}
			{/*   </Button> */}
			{/* </div> */}
		</header>
	);
};

export default Navbar;
