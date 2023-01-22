import { Outlet } from 'react-router-dom';

import Structure from '../../components/Structure/Structure';
const SharedLayout = () => {
  return <Structure outlet={<Outlet />}></Structure>;
};

export default SharedLayout;
