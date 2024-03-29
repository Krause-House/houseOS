import { Comment } from "@/types/Comment";
import { useMemo, useState } from "react";
import { Proposal } from "@snapshot-labs/snapshot.js/dist/sign/types";

import dynamic from "next/dynamic";
import { map } from "ramda";
import { userTags } from "@/config";
import TagSelector from "../../tags/TagSelector";
const CommentListItem = dynamic(() => import("./CommentListItem"));

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
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = userTags;

  const sortedFilteredComments = useMemo(
    () =>
      comments
        .sort((a, b) => (b.vp || 0) - (a.vp || 0))
        .filter((comment) => Number(comment.choice) === choice + 1),
    [comments, choice]
  );

  return (
    <div className="flex w-full flex-col space-y-0">
      {sortedFilteredComments.length > 0 && (
        <div className="border-base-content flex w-full flex-row justify-between px-6 py-4">
          <TagSelector
            tags={tags.map(({ name }) => name)}
            setSelectedTags={setSelectedTags}
            theme={0}
          />
        </div>
      )}
      {sortedFilteredComments.length > 0 ? (
        <div className="flex w-full flex-col space-y-0 py-4">
          {sortedFilteredComments.map((comment: Comment, i: number) => (
            <CommentListItem
              key={i}
              index={i}
              comment={comment}
              choiceTitle={proposal.choices[Number(comment.choice) - 1]}
              selectedTags={selectedTags}
            />
          ))}
        </div>
      ) : (
        <p className="text-base-content w-full px-8 py-8 text-left text-lg font-normal">
          No comments yet.
        </p>
      )}
    </div>
  );
}
