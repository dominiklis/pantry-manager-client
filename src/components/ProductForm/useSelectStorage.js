import { StorageIndicator, Translate } from "components";
import { sortByValues, various } from "constantStrings";
import { useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { makeSelectStorages } from "store/selectors";

const useSelectStorage = ({ componentName }) => {
  const { defaultStorageId } = useSelector((state) => state.app);

  const selectStorages = useMemo(makeSelectStorages, []);
  const storages = useSelector((state) =>
    selectStorages(state, {
      sortBy: sortByValues.nameAsc,
      skip: defaultStorageId,
    })
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
