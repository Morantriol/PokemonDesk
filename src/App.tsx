import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './components/404';
import routes from './routes';

// import s from './App.module.scss';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;
