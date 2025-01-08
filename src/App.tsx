import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import styled from './theme';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

interface IAppProps {
	className?: string;
}

class App extends React.Component<IAppProps> {
	public render() {
		return (
			<BrowserRouter>
				<Box className={this.props.className}>
					<Flex className="menu" py={2} flexDirection="column" alignItems="center">
						<NavBar>
							<Menu />
						</NavBar>
					</Flex>
					<Routes>{routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}</Routes>
				</Box>
			</BrowserRouter>
		);
	}
}

export default styled(App)`
	min-height: 98vh;
	overflow-y: hidden;
`;
