import dynamic from "next/dynamic";
import { EthereumAddress } from "@/types/EthereumAddress";

const ProfilePreview = dynamic(() => import("./ProfilePreview"));

export default function FriendsList({
  friends,
}: {
  friends: Array<EthereumAddress>;
}) {
  return (
    <div className="flex flex-col space-y-0">
      {friends?.map((address: EthereumAddress, i: number) => (
        <ProfilePreview address={address} key={i} i={i} />
      ))}
    </div>
  );
}
