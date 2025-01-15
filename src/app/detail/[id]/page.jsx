/** @format */

'use client';
import React from 'react';
import PropType from 'prop-types';
import MainLayout from '../../../components/layout/MainLayout/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetailThread } from '../../../redux/features/detail/action';
import Category from '../../../components/atoms/Category/Category';
import Votes from '../../../components/Votes/Votes';
import CommentForm from '../../../components/CommentForm/CommentForm';
import CommentList from '../../../components/CommentList/CommentList';
import Owner from '../../../components/Owner/Owner';
import LoadingBar from '../../../components/atoms/LoadingBar/LoadingBar';
import { use } from 'react';

const DetailPage = ({ params }) => {
  const { id } = use(params);
  const { thread, loading } = useSelector((state) => state.detailThread);
  const { data } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailThread(id));
  }, [data]);

  return (
    <MainLayout>
      {loading ? (
        <LoadingBar />
      ) : (
        <div className='flex flex-col gap-12'>
          <section>
            <Category text={thread?.category} />
            <Owner
              name={thread?.owner?.name}
              avatar={thread?.owner?.avatar}
              days={thread?.createdAt}
            />
            <div>
              <div className='font-bold mb-2'>{thread?.title}</div>
              <div dangerouslySetInnerHTML={{ __html: thread?.body }} />
            </div>
          </section>
          <section className='flex flex-col gap-6'>
            <Votes
              upVotes={thread?.upVotesBy?.length}
              downVotes={thread?.downVotesBy?.length}
            />
            <CommentForm id={id} />
            <CommentList comments={thread?.comments} />
          </section>
        </div>
      )}
    </MainLayout>
  );
};

export default DetailPage;

DetailPage.propTypes = {
  params: PropType.any,
};