import { useDispatch, useSelector } from "react-redux";
import { getStorageUsers } from "store/actions";

const useShareStorage = ({ storageId }) => {
  const { getUsers: getUsersLoading } = useSelector(
    (state) => state.storages.loading
  );

  const dispatch = useDispatch();

  const handleRefreshUsers = async () => {
    await dispatch(getStorageUsers(storageId));
  };

  return {
    getUsersLoading,
    handleRefreshUsers,
  };
};

export default useShareStorage;
