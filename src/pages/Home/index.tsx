import React from 'react';
import { Flex, Heading, Text } from 'rebass';
import { NavBar } from '../../components/NavBar';
import { ReactJS, TypeScript, Node, Next } from '../../icons';

export interface Props {}

const styles = {
	body: {
		height: '100%',
		width: '100%',
		backgroundColor: 'lightcyan',
		flexDirection: 'column',
	},
	skills: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		mb: '20px',
		fontSize: '32px',
		fontWeight: 'bold',
		fontFamily: 'Ubuntu',
	},
	icons: {
		gap: '20px',
		mb: '50px',
	},
};

export function Home() {
	return (
		<Flex sx={styles.body}>
			<NavBar title={'Mike Labita'} />
			<Flex sx={styles.skills}>
				<Heading as="h1" sx={styles.heading}>
					Skills
				</Heading>
				<Flex sx={styles.icons}>
					<ReactJS height="50px" width={'50px'} />
					<TypeScript height="50px" width="50px" />
					<Node height="50px" width="50px" />
					<Next height="50px" width="50px" />
				</Flex>
			</Flex>
		</Flex>
	);
}
