import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../UI/Header';
import Footer from '../UI/Footer';

const AppLayout = () => {
	return (
		<>
			<Header />
		 <main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default AppLayout;
