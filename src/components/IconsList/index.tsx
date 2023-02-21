import React, { ReactElement } from 'react';
import { Box, Flex } from 'rebass';
import { ReactJS, TypeScript, Next, Node, AWS, Redux } from '../../icons';

const styles = {
	container: {
		gap: '30px',
	},
	figure: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

const iconHeightWidth = '50px';
const icons = [
	{
		icon: <ReactJS size="50px" />,
		title: 'React',
	},
	{
		icon: <TypeScript size="50px" />,
		title: 'TypeScript',
	},
	{
		icon: <Next size="50px" />,
		title: 'Next',
	},
	{
		icon: <Node size="50px" />,
		title: 'Node',
	},
	{
		icon: <AWS size="50px" />,
		title: 'AWS',
	},
	{
		icon: <Redux size="50px" />,
		title: 'Redux',
	},
];

export function IconsList() {
	return (
		<Flex sx={styles.container}>
			{icons.map((obj) => (
				<Flex as="figure" sx={styles.figure}>
					<Box>{obj.icon}</Box>
					<Box as="figcaption">{obj.title}</Box>
				</Flex>
			))}
		</Flex>
	);
}
