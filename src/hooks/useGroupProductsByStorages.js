import { various } from "constantStrings";
import { useMemo } from "react";

const useGroupProductsByStorages = (storages) => {
  const result = useMemo(() => {
    let storageIds = [];

    const productsGroupedByStorages = storages.reduce((acc, cur) => {
      let accProperty = cur.storageId;

      if (!accProperty) accProperty = various.noStorage;
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
