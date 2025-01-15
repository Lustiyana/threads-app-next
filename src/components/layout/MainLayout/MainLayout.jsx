/** @format */

'use client';
import React, { useEffect } from 'react';
import Categories from '../../Categories/Categories';
import PostModal from '../../PostModal/PostModal';
import Sidebar from '../../Sidebar/Sidebar';
import PropType from 'prop-types';
import { useDispatch } from 'react-redux';
import { setToken } from '@/redux/features/login/action';

const MainLayout = ({ children, title }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) dispatch(setToken(token));
    }
  }, []);

  return (
    <div className='w-full'>
      <Sidebar />
      <div className='flex justify-center min-h-screen'>
        <div className='p-12 border-x-2 w-1/2'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          {children}
        </div>
      </div>
      <Categories />
      <PostModal />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropType.any,
  title: PropType.string,
};
