/* eslint-disable react/react-in-jsx-scope */
import { Home } from './components/Home';
import Login from './components/Login';
import UserProps from './components/UserProps';
import ShareRecipe from './components/ShareRecipe';
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
  },
  {
    path: '/sharerecipe',
    element: <ShareRecipe />
  }
];

export default AppRoutes;
