import { various } from "constantStrings";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const useGroupProductsByStorages = (storages) => {
  const { defaultStorageId } = useSelector((state) => state.users.user);

  const result = useMemo(() => {
    let storageIds = [];

    const productsGroupedByStorages = storages.reduce((acc, cur) => {
      let accProperty = cur.storageId;

      if (accProperty === defaultStorageId) accProperty = various.noStorage;
      if (!storageIds.includes(accProperty)) storageIds.push(accProperty);

      if (Array.isArray(acc[accProperty])) acc[accProperty].push(cur);
      else acc[accProperty] = [cur];

      return acc;
    }, []);

    return {
      storageIds,
      productsGroupedByStorages,
    };
  }, [storages]);

  return result;
};

export default useGroupProductsByStorages;
