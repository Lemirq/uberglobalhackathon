import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
const Car = () => {
	const car = useRef<THREE.Mesh>(null!);
	const { camera, scene } = useThree();
	useEffect(() => {
		// const tl = gsap.timeline({ repeat: 0 });
		// tl.to(car.current.position, { x: 10, y: 0, z: 70, duration: 0.1 });
		// tl.to(car.current.rotation, { y: 270 * (Math.PI / 180), duration: 0.5, delay: -0.3 });
		// tl.to(car.current.position, { x: 10, duration: 1 });
		// tl.to(car.current.position, { x: 165, duration: 1 });
		// tl.to(car.current.rotation, { y: 180 * (Math.PI / 180), duration: 0.5, delay: -0.3 });
		// tl.to(car.current.position, { z: 160, duration: 1 });
		// tl.to(car.current.rotation, { y: 90 * (Math.PI / 180), duration: 0.5, delay: -0.3 });
		console.log(scene.getObjectByName('Trank'));

		scene.getObjectById(1278)?.material.color.setHex(0x000000);
	}, []);
	// useFrame(() => {
	// 	// Assuming car.current.rotation.y is in radians

	// 	// Define the camera distance from the car (adjust as needed)
	// 	const cameraDistance = 20;

	// 	// Calculate the camera position based on car orientation
	// 	camera.position.x = car.current.position.x + cameraDistance * Math.sin(car.current.rotation.y);
	// 	camera.position.z = car.current.position.z + cameraDistance * Math.cos(car.current.rotation.y);

	// 	// Set the camera height and rotation to match the car
	// 	camera.position.y = car.current.position.y + 10;
	// 	camera.rotation.y = car.current.rotation.y;
	// 	camera.rotation.x = car.current.rotation.x;
	// 	camera.rotation.z = car.current.rotation.z;
	// });
	const gltf = useGLTF('/taxi/taxi.gltf');
	return (
		<mesh ref={car} rotation={[0, 270 * (Math.PI / 180), 0]} position={[10, 0, 70]}>
			<primitive object={gltf.scene} scale={2} />
		</mesh>
	);
};

export default Car;
