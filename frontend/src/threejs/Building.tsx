import React from 'react';
import { Box } from '@react-three/drei';

function Building({
	position,
	width,
	depth,
	height,
	color,
}: {
	position: [number, number, number];
	width: number;
	depth: number;
	height: number;
	color: string;
}) {
	return <Box args={[width, height, depth]} position={position} color={color} />;
}

export default Building;
