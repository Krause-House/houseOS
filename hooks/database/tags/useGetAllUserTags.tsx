import { useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { EthereumAddress } from "@/types/EthereumAddress";
import { Maybe } from "@/types/Maybe";
import { useSignIn } from "../../sign-in/useSignIn";

import { userTags as allUserTags } from "../../../config";
import { useTagUser, useUntagUser } from "../useTagUser";
import { listenUserTags } from "../../../utils/firebase/user";
import { Tag } from "@/types/Tag";

export const useGetAllUserTags = (
  address: Maybe<EthereumAddress>
): Array<any> => {
  const tagUser = useTagUser();
  const untagUser = useUntagUser();
  const { data: account } = useAccount();
  const { signedIn } = useSignIn();

  const [tags, setTags] = useState([]);
  const sortedTags = useMemo(
    () => tags.sort((a: Tag, b: Tag) => b.taggers.length - a.taggers.length),
    [tags]
  );

  const declareToggle = (o: any) => ({
    ...o,
    toggle: () => {
      // TODO: account?.address might be a bug
      if (account?.address) {
        o.taggers.includes(account?.address)
          ? untagUser(address, o.name)
          : tagUser(address, o.name);
      } else {
        console.log("NO USER");
      }
    },
  });

  const addDescription = (tag: any) => ({
    ...tag,
    description: allUserTags.find(({ name }) => name === tag.tag)?.description,
  });

  useEffect(() => {
    address &&
      listenUserTags(address, (tags: any) => {
        const otherTags = allUserTags
          .filter(({ name }) => !tags.map(({ tag }: any) => tag).includes(name))
          .map((o) => ({ ...o, taggers: [] }));

        const allTags = tags
          .concat(otherTags)
          .map((o: any) => ({
            ...o,
            name: o.name || o.tag,
            tag: o.name || o.tag,
          }))
          .map(addDescription)
          .map(declareToggle);

        setTags(allTags);
      });
  }, [account?.address, untagUser, tagUser, signedIn, address]);

  console.log(sortedTags);

  return sortedTags;
};

export function printPass(a: any) {
  console.log(a);
  return a;
}
