/** @format */
"use client";

import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { getThreads } from "../../redux/features/threads/action";
import Votes from "../../components/Votes/Votes";
import { getUsers } from "../../redux/features/users/action";
import Owner from "../../components/Owner/Owner";
import Category from "../../components/atoms/Category/Category";
import LoadingBar from "../../components/atoms/LoadingBar/LoadingBar";
import Link from "next/link";

const HomePage = () => {
  const { threads, loading } = useSelector((state) => state.threads);
  const { data } = useSelector((state) => state.newThread);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThreads());
    dispatch(getUsers());
  }, [data]);

  return (
    <MainLayout title="Home">
      {loading ? (
        <LoadingBar />
      ) : threads?.length > 0 ? (
        threads?.map((thread) => {
          return (
            <div key={thread?.id} className="border-b-2 py-4">
              <Category text={thread?.category} />
              <Owner
                name={users?.find((user) => user?.id == thread?.ownerId).name}
                avatar={
                  users?.find((user) => user?.id == thread?.ownerId).avatar
                }
                days={thread?.createdAt}
              />
              <Link
                href={`/detail/${thread?.id}`}
                className="flex flex-col gap-2 mb-4"
              >
                <h3 className="font-bold text-xl">{thread?.title}</h3>
                <div
                  className="line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: thread?.body }}
                />
              </Link>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 flex-1">
                  <Votes
                    upVotes={thread?.upVotesBy?.length}
                    downVotes={thread?.downVotesBy?.length}
                  />
                  <div className="flex">
                    <Icon
                      icon="iconamoon:comment-light"
                      width="20"
                      height="20"
                    />
                    <div>{thread?.totalComments}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Thread kosong</p>
      )}
    </MainLayout>
  );
};
export default HomePage;
