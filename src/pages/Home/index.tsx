import React, { JSXElementConstructor, ReactElement } from 'react';
import { Flex, Heading, Text } from 'rebass';
import { NavBar } from '../../components/NavBar';
import { IconsList } from '../../components/IconsList';

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
		margin: '100px 0',
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
				<IconsList />
				<Flex sx={styles.icons}></Flex>
			</Flex>
		</Flex>
	);
}
