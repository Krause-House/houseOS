import { useAppDispatch } from "../redux/app/hooks";
import { track as trackAddress } from "../redux/features/users/usersSlice";
import { EthereumAddress } from "@/types/EthereumAddress";
import { listenUser } from "@/utils/firebase/user";
import { compose } from "ramda";

export const useTrackUser = () => {
  const dispatch = useAppDispatch();

  const track = (address: EthereumAddress) =>
    listenUser(address, compose(dispatch, trackAddress));

  return track;
};
