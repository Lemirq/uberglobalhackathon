import CityScene from './threejs/CityScene';
import { Canvas } from '@react-three/fiber';
import InfinitePlane from './threejs/InfinitePlane';
import { Suspense, useState } from 'react';
import Loading from './Loading';
const App = () => {
	// state for toggling the 3d scene
	const [visible, setVisible] = useState(false);
	return (
		<div className="w-screen min-h-screen px-14 py-10 fc bg-zinc-900">
			{/* suspense for loading the 3d scene */}
			<Suspense fallback={<Loading />}>
				{visible ? (
					<div className="w-screen h-screen px-24 fc rounded-xl overflow-hidden">
						<Canvas className="w-full h-[70vh]">
							<CityScene />
							<InfinitePlane />
						</Canvas>
					</div>
				) : (
					<div className="w-screen h-screen fc justify-evenly relative">
						<div className="w-screen h-screen absolute">
							<video src="/bg.mp4" className="object-cover w-screen h-screen absolute" autoPlay />
						</div>
						<div className="w-full h-screen fc justify-evenly relative">
							<div className="z-10">
								<h1 className="text-9xl font-uber font-black text-white tracking-tighter">Quantum Advancements in Route Planning</h1>
								<button
									className="px-10 py-10 text-black transition-all text-xl bg-white rounded-full hover:bg-black hover:text-white"
									onClick={() => setVisible(!visible)}
								>
									Dive into it
								</button>
							</div>
						</div>
					</div>
				)}
			</Suspense>
		</div>
	);
};

export default App;
