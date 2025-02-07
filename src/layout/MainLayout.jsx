import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Navbar from '../pages/shared/Navbar';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto' >
            <Navbar> </Navbar>
            <Outlet> </Outlet>
        </div>
    );
};

export default MainLayout;