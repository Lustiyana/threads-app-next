/** @format */
'use client';
import React from 'react';
import PropType from 'prop-types';
import { timeDifferent } from '../../utils/date';

const Owner = ({ name, avatar, days }) => {
  return (
    <div className='flex gap-2 items-center mb-4'>
      <img src={avatar} alt='avatar' className='w-10 h-10 rounded-full' />
      <div>
        <p className='font-bold'>{name}</p>
        <p className='text-xs'>{timeDifferent(days)} hari yang lalu</p>
      </div>
    </div>
  );
};

export default Owner;

Owner.propTypes = {
  name: PropType.string,
  avatar: PropType.string,
  days: PropType.string,
};
