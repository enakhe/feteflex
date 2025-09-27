import { Component, Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../robots.txt';


export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Fragment>
				<BrowserRouter>
					<Routes>
						{AppRoutes.map((route, index) => {
							return <Route path={route.path} key={index} element={route.element} />;
						})}
					</Routes>
				</BrowserRouter>
				<ToastContainer />
			</Fragment>
		)
	}
}
