import { useCallback, useEffect, useState } from "react";
import { useAccount, useNetwork, useSignMessage } from "wagmi";
import { SiweMessage } from "siwe";
import { useGetUserProfile } from "./users/useGetUserProfile";

export const useSIWE = () => {
  const { data: account } = useAccount();
  const { activeChain } = useNetwork();
  const { signMessageAsync } = useSignMessage();
  const [state, setState] = useState<{
    address?: string;
    error?: Error;
    loading?: boolean;
    token?: string;
  }>({});
  const user = useGetUserProfile();
  const hodler = user?.hodler;

  const signIn = useCallback(async () => {
    try {
      const address = account?.address;
      const chainId = activeChain?.id;
      console.log(
        `Trying to SIWE ${account?.address} on chain ${activeChain?.id}`
      );

      if (!address || !chainId) return;

      setState((x) => ({ ...x, error: undefined, loading: true }));
      // Fetch random nonce, create SIWE message, and sign with wallet
      const nonceRes = await fetch("/api/nonce");
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce: await nonceRes.text(),
      });
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      console.log("Got signature successfully.", signature);

      // Verify signature
      const verifyRes: Response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, signature, address }),
      });
      if (!verifyRes.ok) throw new Error("Error verifying message");

      const res = await verifyRes.json();

      if (!res.ok) throw new Error("Error verifying message");
      setState((x) => ({
        ...x,
        address,
        loading: false,
      }));
      console.log("Should successfully have SIWE");
    } catch (error) {
      console.log("Failed to SIWE: ", error);

      setState((x: any) => ({ ...x, error, loading: false }));
    }
  }, [account?.address, activeChain, hodler]);

  // Fetch user when:
  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch("/api/me");
        const json = await res.json();

        setState((x) => ({ ...x, address: json.address, token: json.token }));
      } catch (_error) {}
    };
    // 1. page loads
    handler();

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener("focus", handler);
    return () => window.removeEventListener("focus", handler);

    // 3. new user
  }, [state.address, account?.address]);

  const signOut = async () => {
    console.log("signing out");
    await fetch("/api/logout");

    setState({});
  };

  return {
    state,
    signIn,
    signOut,
    signedIn: !!state.token,
  };
};
