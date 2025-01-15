/** @format */
'use client';
import React from 'react';
import FormContent from '../atoms/FormContent/FormContent';
import Button from '../atoms/Button/Button';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { useState } from 'react';
import { postCommentAction } from '../../redux/features/comment/action';
import { getToken } from '../../utils/storage';
import Link from 'next/link';

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCommentAction(id, content));
  };

  return getToken() ? (
    <form onSubmit={handleSubmit}>
      <h3 className='font-bold text-2xl mb-4'>Beri Komentar</h3>
      <FormContent onInput={(e) => setContent(e.target.innerHTML)} />
      <Button full={true} type='submit'>
        <div>KIRIM</div>
      </Button>
    </form>
  ) : (
    <div>
      <Link to='/login' className='text-primary'>Login</Link> untuk memberi komentar
    </div>
  );
};

export default CommentForm;

CommentForm.propTypes = {
  id: PropType.string,
};
