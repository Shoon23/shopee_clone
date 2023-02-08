import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useRefreshToken } from "../hooks/useRefreshToken";

type Props = {};

const Persist: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData(["user"]);
  const isLoggedIn = user !== null;

  const { isLoading, isError } = useQuery(["user"], useRefreshToken, {
    enabled: isLoggedIn,
    refetchOnMount: false,
    retry: false,
  });

  if (isError) {
    return <Outlet />;
  }

  return isLoading ? <div>Loading...</div> : <Outlet />;
};

export default Persist;
