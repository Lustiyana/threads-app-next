import Owner from "../Owner/Owner";
import Votes from "../Votes/Votes";
import PropType from 'prop-types'

const CommentList = ({comments}) => {
  console.log(comments)
  return (
    <div>
      <h3 className="font-bold text-xl">
        Komentar({comments?.length})
      </h3>
      {comments?.map((comment) => (
        <div key={comment?.id} className="border-b-2 py-2 flex flex-col gap-4">
          <Owner name={comment?.owner?.name} avatar={comment?.owner?.avatar} days={comment?.createdAt}/>
          <div dangerouslySetInnerHTML={{ __html: comment?.content }} />
          <Votes
            upVotes={comment?.upVotesBy?.length}
            downVotes={comment?.downVotesBy.length}
          />
        </div>
      ))}
    </div>
  );
};

export default CommentList;

CommentList.propTypes = {
  comments: PropType.array
}