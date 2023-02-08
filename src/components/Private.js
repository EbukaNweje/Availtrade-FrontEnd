import React from 'react';
import { Outlet } from 'react-router-dom';


const Private = () => {
//   const user =  JSON.parse(localStorage.getItem('user'))

  return (
    <Outlet />
  );
};

export default Private;