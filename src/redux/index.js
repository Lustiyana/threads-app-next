/** @format */
'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import PropType from 'prop-types';


const ProviderLayout = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderLayout;

ProviderLayout.propTypes = {
  children: PropType.any,

};