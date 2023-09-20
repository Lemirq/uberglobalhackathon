const InfinitePlane = () => {
	return (
		<mesh position={[150, 0, 200]} rotation={[-Math.PI / 2, 0, 0]}>
			<planeGeometry args={[3000, 3000]} />
			<meshBasicMaterial color={0x9e9e9e} />
		</mesh>
	);
};

export default InfinitePlane;
