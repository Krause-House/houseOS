import { Comment } from "../types/Comment";
import { useMemo, useState } from "react";
import { Proposal } from "@snapshot-labs/snapshot.js/dist/sign/types";
import { userTags } from "../config";
import { useUserAddress } from "../hooks/ethereum/useUserAddress";

import dynamic from "next/dynamic";
import { useSignIn } from "@/hooks/useSignIn";
const CommentListItem = dynamic(() => import("./CommentListItem"));
const TagSelector = dynamic(() => import("./TagSelector"));

interface Props {
  comments: Array<Comment>;
  toggleCommentView: any;
  proposal: Proposal;
  choice: number;
}

export default function CommentList({
  comments = [],
  toggleCommentView,
  proposal,
  choice,
}: Props) {
  const tags = userTags;
  const [selectedTags, setSelectedTags] = useState([]);
  const { signedIn } = useSignIn();

  const sortedFilteredComments = useMemo(
    () =>
      comments
        .sort((a, b) => (b.vp || 0) - (a.vp || 0))
        .filter((comment) => Number(comment.choice) === choice + 1),
    [comments, choice]
  );

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between border-b px-6 pb-4">
        <div className="">
          {sortedFilteredComments.length > 0 && (
            <TagSelector
              tags={tags.map(({ name }) => name)}
              setSelectedTags={setSelectedTags}
            />
          )}
        </div>
        {/* <div className="flex w-fit flex-row items-baseline justify-end">
          
          {signedIn ? (
            <p
              className="cursor-pointer font-bold text-gray-900 hover:text-gray-600"
              onClick={toggleCommentView}
            >
              Comment
            </p>
          ) : (
            <p className="cursor-pointer   text-gray-900 hover:text-gray-600">
              Sign in to Comment
            </p>
          )}
        </div> */}
      </div>
      <div className="flex flex-col space-y-4">
        {sortedFilteredComments.length > 0 ? (
          sortedFilteredComments.map((comment: Comment, i: number) => (
            <CommentListItem
              key={i}
              index={i}
              comment={comment}
              selectedTags={selectedTags}
            />
          ))
        ) : (
          <p className="text-left text-3xl font-semibold text-gray-800">
            No comments yet.
          </p>
        )}
      </div>
    </div>
  );
}
