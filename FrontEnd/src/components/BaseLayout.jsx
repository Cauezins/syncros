import { Outlet } from 'react-router-dom';
import DevelopmentStatus from './DevelopmentStatus';

const BaseLayout = () => {
  return (
    <>
      <Outlet />
      <DevelopmentStatus />
    </>
  );
};

export default BaseLayout;