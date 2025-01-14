/** @format */

"use client";
import { Icon } from "@iconify/react";
import PropType from "prop-types";

const Votes = ({ upVotes, downVotes }) => {
  return (
    <div className="flex w-1/3 border rounded-full px-4 py-2 gap-2">
      <div className="flex-1 flex items-center border-r-2 gap-2">
        <Icon icon="solar:like-broken" width="20" height="20" />
        <div>{upVotes}</div>
        <div>Like</div>
      </div>
      <div className="flex gap-2">
        <Icon icon="solar:like-broken" width="20" height="20" rotate={2} />
        <div>{downVotes}</div>
      </div>
    </div>
  );
};

export default Votes;

Votes.propTypes = {
  upVotes: PropType.number,
  downVotes: PropType.number,
};
