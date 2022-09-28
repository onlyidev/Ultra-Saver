/* eslint-disable react/react-in-jsx-scope */
import { Home } from './components/Home';
import Login from './components/Login';
import UserProps from './components/UserProps';
import EnergyCalculation from './components/EnergyCalculation';

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/energycalculation',
    element: <EnergyCalculation />
  },
  {
    path: '/user/properties',
    element: <UserProps />
  }
];

export default AppRoutes;
