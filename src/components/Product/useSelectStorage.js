import { StorageIndicator, Translate } from "components";
import { sortStoragesBy, various } from "constantStrings";
import { useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { makeSelectStorages } from "store/selectors";

const useSelectStorage = ({ componentName }) => {
  const selectStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectStorages(state, { sortBy: sortStoragesBy.sortByNameAsc })
  );

  const selectStorageOptions = useMemo(() => {
    return [
      {
        value: various.noStorage,
        label: <Translate section={componentName} text="noStorageOption" />,
        icon: <IoClose />,
      },
      ...storages.map((storage) => ({
        value: storage.storageId,
        label: storage.storageName,
        icon: <StorageIndicator icon color={storage.color} />,
      })),
    ];
  }, [componentName, storages]);

  return { selectStorageOptions };
};

export default useSelectStorage;
