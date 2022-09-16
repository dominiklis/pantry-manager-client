import { useDispatch, useSelector } from "react-redux";
import { getShoppingListUsers, getStorageUsers } from "store/actions";

const useShare = ({ isShoppingList, id }) => {
  const dispatch = useDispatch();

  const { getUsers: storagesUsersLoading } = useSelector(
    (state) => state.storages.loading
  );

  const { getUsers: listsUsersLoading } = useSelector(
    (state) => state.shoppingLists.loading
  );

  const handleRefreshUsers = async () => {
    if (isShoppingList) await dispatch(getShoppingListUsers(id));
    else await dispatch(getStorageUsers(id));
  };

  return { storagesUsersLoading, listsUsersLoading, handleRefreshUsers };
};

export default useShare;
