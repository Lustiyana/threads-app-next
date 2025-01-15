/** @format */
'use client';
import React from 'react';
import PropType from 'prop-types';

const Category = ({ text }) => {
  return (
    <p className='inline-block px-4 py-1 mb-4 text-sm border rounded-full wh-auto'>
      #{text}
    </p>
  );
};

export default Category;

Category.propTypes = {
  text: PropType.string,
};
