import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useRefreshToken } from "../hooks/useRefreshToken";

type Props = {};

const Persist: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);
  const isExist = user !== null;

  const { isLoading, isError } = useQuery(["user"], useRefreshToken, {
    enabled: isExist,
    refetchOnMount: false,
    retry: false,
  });

  return isLoading ? <div className="">loading....</div> : <Outlet />;
};

export default Persist;
