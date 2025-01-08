import * as React from 'react';
import { RouteObject } from 'react-router-dom';
import PhotoView from './components/PhotoView';
import HomePage from './components/Home';
import Form from './components/Form';
import KpiPanel from './components/KpiWrapper';
import KpiPanelItem from './components/DashboardView';

function randomNumber() {
	return (Math.random() * (10.0 - 1.0 + 1.0) + 1.0).toFixed(2);
}

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/photo',
		element: <PhotoView />,
	},
	{
		path: '/user',
		element: <Form />,
	},
	{
		path: '/dashboard',
		element: (
			<KpiPanel>
				<KpiPanelItem content={() => randomNumber()} title="User impressions" />
				<KpiPanelItem content={() => randomNumber()} title="Overlays shown" />
				<KpiPanelItem content={() => randomNumber()} title="Overlays Clicked" />
				<KpiPanelItem content={() => randomNumber()} currency={true} title="Revenue" />
			</KpiPanel>
		),
	},
];
