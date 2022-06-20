import { useMemo } from "react";
import { Tag } from "../../types/Tag";

export default function TagsList({ tags, disabled = false }: any) {
  const sortedTags = useMemo(
    () => tags.sort((a: Tag, b: Tag) => b.taggers.length - a.taggers.length),
    [tags]
  );
  return (
    <div className="flex flex-row space-x-2">
      {sortedTags.map(
        (tag: any, i: number) =>
          tag.taggers.length > 0 && (
            <p
              className="badge badge-light overflow-hidden"
              key={i}
              onClick={!disabled ? tag.toggle : () => {}}
            >
              <span className="mr-2 -ml-3 bg-gray-400 p-2 text-gray-700">
                {tag.taggers.length || ""}
              </span>
              {tag.tag}
            </p>
          )
      )}
    </div>
  );
}