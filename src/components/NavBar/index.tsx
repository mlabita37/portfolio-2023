import React from 'react';
import { Flex, Box, Text, Link } from 'rebass';

const styles = {
	nav: {
		px: 2,
		alignItems: 'center',
		color: 'white',
		bg: 'black',
	},
	title: {
		p: 2,
		fontWeight: 'bold',
	},
	spacer: {
		mx: 'auto',
	},
	link: {
		display: 'inline-block',
		fontWeight: 'bold',
		px: 2,
		py: 1,
		color: 'inherit',
	},
};

export interface Props {
	title?: string;
}

export function NavBar({ title }: Props) {
	return (
		<Flex sx={styles.nav}>
			<Text sx={styles.title}>{title}</Text>
			<Box sx={styles.spacer} />
			<Link sx={styles.link}>
				<i className="fa fa-bars"></i>
			</Link>
		</Flex>
	);
}
