import {
  usePublicRecord,
  useViewerRecord,
  ViewerConnectedContainer,
} from "@self.id/framework";
import { createHook } from "async_hooks";
import Image from "next/image";
import { compose, prop } from "ramda";
import { useState } from "react";
import { useAccount, useBalance, useConnect, useEnsName } from "wagmi";
import ConnectButton from "../../components/CeramicConnectButton";
import Layout from "../../components/Layout";
import { defaultAvatar } from "../../config";
import { useGetUserTags } from "../../hooks/tags/useGetUserTags";
import { $KRAUSE, useGetBalanceOf } from "../../hooks/useGetBalanceOf";
import { useGetUser } from "../../hooks/useGetUser";
import { useGetUsers } from "../../hooks/useGetUsers";
import { EthereumAddress } from "../../types/EthereumAddress";
import { fetchProposal } from "../../utils/fetchProposal";

export function ProfilePreview({ address }: any) {
  const { content: profile } = useGetUser(address);

  return (
    <div className="">
      <div className="ring-primary flex flex-row space-x-4 rounded-full border-4 ring-4">
        <Image
          src={profile?.avatar || defaultAvatar}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col items-start justify-center">
          <p className="text-lg font-semibold text-gray-200">{profile?.name}</p>
          <p>{address.slice(0, 8)}</p>
        </div>
      </div>
    </div>
  );
}

function SignupView({ address }) {
  return (
    <div>
      <p className="text-3xl font-bold text-gray-600">
        No account linked to {address}
      </p>
      <ConnectButton />
    </div>
  );
}
export function LoadingView({ address }) {
  return (
    <div>
      <p className="text-3xl font-bold text-gray-600">
        Loading profile at {address}...
      </p>
    </div>
  );
}

export default function Profile({ user }: any) {
  const { address } = user;
  const { content: profile, isError, isLoading, error } = useGetUser(address); // TODO: preload this in static props
  const krauseBalance = useGetBalanceOf({
    tokenAddress: $KRAUSE,
    address,
  });
  const { data: ensName } = useEnsName({ address });

  return (
    <Layout>
      <div className="flex w-full flex-col space-y-32 px-72 pt-20">
        {!address ? (
          <LoadingView address={ensName || address} />
        ) : (
          <>
            <div className="flex w-full flex-row items-center justify-between">
              <div className="justfiy-start flex flex-col items-start space-y-2">
                <div className="flex flex-row space-x-2">
                  {profile?.tags?.map((tag: string) => (
                    <p className="badge badge-dark">{tag}</p>
                  ))}
                </div>
                <p className="text-left text-5xl font-bold text-gray-700">
                  {profile?.name || ensName || "Anon Jerry"}
                </p>
                <p className="font-semibold text-gray-200">followed by </p>
                <p className="font-semibold text-gray-200">
                  {Number(krauseBalance)} $KRAUSE
                </p>
              </div>
              <div className="ring-primary rounded-full border-4 ring-4">
                <Image
                  src={profile?.avatar || user.avatarUrl}
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="text-left text-3xl font-bold text-gray-200">
                Comments
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <p className="text-left text-3xl font-bold text-gray-200">
                Friends
              </p>
              <div className="flex flex-col space-y-4">
                {profile?.friends?.map((address: EthereumAddress) => (
                  <ProfilePreview address={address} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}

export function getStaticProps({ params }: any) {
  const users = useGetUsers();
  const user = users.find((p) => p.address === params.address);
  return {
    props: {
      user,
    },
  };
}

export function getStaticPaths() {
  const users = useGetUsers();
  const paths = users.map(({ address }) => ({ params: { address } }));
  return { paths, fallback: false };
}
