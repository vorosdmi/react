import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainMenu } from './layout/Menu/Layout';
import { Movies } from './pages/Movies/Movies';
import { Favorites } from './pages/Favorites/Favorites';
import { Login } from './pages/Login/Login';
import { LoginedUserContextProvider } from './context/users.context'
import { Error } from './pages/Error/Error';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainMenu />,
		children: [
			{
				path: '/',
				element: <Movies />
			},
			{
				path: '/favorites',
				element: <Favorites />
			},
			{
				path: '/login',
				element: <Login />
			},
						{
				path: '*',
				element: <Error />
			}
		]
	}	
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<LoginedUserContextProvider>
			<RouterProvider router={router}/>
		</LoginedUserContextProvider>
	</StrictMode>
);
