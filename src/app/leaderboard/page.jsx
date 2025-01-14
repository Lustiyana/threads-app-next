/** @format */

"use client";

import { useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderboards } from "../../redux/features/leaderboards/action";
import LoadingBar from "../../components/atoms/LoadingBar/LoadingBar";

const Leaderboards = () => {
  const { leaderboards, loading } = useSelector((state) => state.leaderboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeaderboards());
  }, []);

  return (
    <MainLayout title="Leaderboard">
      {loading ? (
        <LoadingBar />
      ) : (
        <div className="w-full flex flex-col gap-4 mt-8">
          {leaderboards?.map((leaderboard) => (
            <div
              key={leaderboard.user.id}
              className="flex justify-between items-center"
            >
              <div className="flex gap-8 items-center">
                <img
                  src={leaderboard?.user?.avatar}
                  alt="avatar"
                  className="rounded-full w-12 h-12"
                />
                <div className="font-bold text-xl">{leaderboard.user.name}</div>
              </div>
              <div className="">{leaderboard.score}</div>
            </div>
          ))}
        </div>
      )}
    </MainLayout>
  );
};

export default Leaderboards;
