import { OrbitControls, PerspectiveCamera, RoundedBox, useHelper } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import Car from './Car';
const CityScene = () => {
	const direc = useRef<THREE.DirectionalLight>(null!);

	const distance = [0, 0];
	const buildings = [];
	for (let a = 0; a < 5; a++) {
		for (let b = 0; b < 5; b++) {
			for (let i = 0; i < 5; i++) {
				for (let j = 0; j < 5; j++) {
					const height = Math.floor(Math.random() * 51) + 10;
					const chance = Math.random();

					buildings.push(
						<mesh castShadow receiveShadow key={Math.random()} position={[i * 7 + distance[1], height / 2, j * 13 + distance[0]]}>
							<RoundedBox radius={1} args={[5, height, chance > 0.5 ? 10 : 7]}>
								<meshStandardMaterial color={0x3333333} metalness={0.2} roughness={0.5} />
							</RoundedBox>
						</mesh>
					);
				}
			}

			distance[0] += 90;
		}
		distance[1] += 60;
		distance[0] = 0;
	}

	useHelper(direc, THREE.DirectionalLightHelper, 5, 'pink');

	return (
		<>
			<PerspectiveCamera args={[40]} position={[1000, 100, 100]} />
			{/* <color attach="background" args={[0xf4f4f4]} /> */}
			<ambientLight castShadow intensity={0.5} />
			<directionalLight castShadow ref={direc} position={[-100, 100, -100]} intensity={1.5} />
			{buildings}
			{/* <OrbitControls minDistance={10} maxDistance={105} /> */}
			<OrbitControls />
			<axesHelper args={[1000]} />
			<fog attach="fog" args={[0xf4f4f4, 200, 800]} />
			<Car />
		</>
	);
};

export default CityScene;
