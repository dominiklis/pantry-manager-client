import { StorageIndicator, Translate } from "components";
import { various } from "constantStrings";
import { useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

const useSelectStorage = ({ componentName }) => {
  const { byId: storagesInStore, allIds: storagesIds } = useSelector(
    (state) => state.storages
  );

  const selectStorageOptions = useMemo(() => {
    return [
      {
        value: various.noStorage,
        label: <Translate section={componentName} text="noStorageOption" />,
        icon: <IoClose />,
      },
      ...storagesIds.map((storageId) => ({
        value: storageId,
        label: storagesInStore[storageId].storageName,
        icon: (
          <StorageIndicator icon color={storagesInStore[storageId].color} />
        ),
      })),
    ];
  }, [componentName, storagesIds, storagesInStore]);

  return { selectStorageOptions };
};

export default useSelectStorage;
