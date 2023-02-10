import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToast, createCollectionOfProducts, hideMenus } from "store/actions";
import { validateInput } from "utils";

const getValidationProductErrors = (product) => {
  let errors = [];

  errors.push(validateInput("amount", product.amount, true));
  errors.push(validateInput("productName", product.productName));
  errors.push(validateInput("expirationDate", product.expirationDate, true));

  return errors.filter((e) => e !== "");
};

const handleJson = (text, storageId) => {
  const json = JSON.parse(text);

  const validProducts = [];
  const invalidProducts = [];

  json.forEach((product) => {
    product.productId = product["product id"];
    delete product["product id"];

    product.productName = product["product name"];
    delete product["product name"];

    product.expirationDate = product["expiration date"]
      ? product["expiration date"]
      : null;
    delete product["expiration date"];

    product.storageId = storageId;
    product.selected = true;

    const errors = getValidationProductErrors(product);

    if (errors?.length) invalidProducts.push({ ...product, errors });
    else validProducts.push(product);
  });

  return { validProducts, invalidProducts };
};

const handleCSV = (text, storageId) => {
  const rows = text.trim().split("\n");
  if (!rows?.length || rows.length === 1) return;

  rows.shift();

  const validProducts = [];
  const invalidProducts = [];

  rows.forEach((row) => {
    const productValues = row.split(",");
    productValues[productValues.length - 1] = productValues[
      productValues.length - 1
    ].replace("\r", "");

    let product = {};

    product.productId = productValues[0].replaceAll('"', "");
    product.productName = productValues[1].replaceAll('"', "");
    product.amount = productValues[2].replaceAll('"', "");
    const expDate = productValues[3].replaceAll('"', "").replace("\r", "");
    product.expirationDate = expDate ? expDate : null;
    product.storageId = storageId;
    product.selected = true;

    const errors = getValidationProductErrors(product);

    if (errors?.length) invalidProducts.push({ ...product, errors });
    else validProducts.push(product);
  });

  return { validProducts, invalidProducts };
};

const useUploadMenu = ({ componentName, toggleMenu }) => {
  const darkTheme = useIsDarkTheme();

  const [products, setProducts] = useState([]);
  const [invalidProducts, setInvalidProducts] = useState([]);
  const [fileError, setFileError] = useState("");

  const { storageId } = useSelector((state) => state.app.uploadMenu);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setFileError("");
      return;
    }

    if (file.type !== "text/csv" && file.type !== "application/json") {
      setFileError(<Translate section={componentName} text="fileTypeError" />);
      return;
    }

    if (file.size > 2000000) {
      setFileError(<Translate section={componentName} text="fileSizeError" />);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      const text = e.target.result;

      if (file.type === "application/json") {
        try {
          const { validProducts, invalidProducts } = handleJson(
            text,
            storageId
          );
          setProducts(validProducts);
          setInvalidProducts(invalidProducts);
        } catch (error) {
          setFileError(error.message);
        }
      } else {
        try {
          const { validProducts, invalidProducts } = handleCSV(text, storageId);
          setProducts(validProducts);
          setInvalidProducts(invalidProducts);
        } catch (error) {
          setFileError(error.message);
        }
      }
    };
  };

  const dispatch = useDispatch();

  const handleSubmitProducts = async (e) => {
    e.preventDefault();

    await dispatch(
      createCollectionOfProducts(
        products
          .filter((product) => product.selected)
          .map((product) => {
            const { selected, ...prod } = product;

            return prod;
          })
      )
    ).unwrap();

    dispatch(
      addToast({
        translate: {
          section: componentName,
          text: "toastText",
        },
      })
    );

    toggleMenu();
  };

  const { create: loading } = useSelector((state) => state.products.loading);

  const { uploadMenu } = useSelector((state) => state.app);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== `/storages/${uploadMenu.storageId}`) {
      dispatch(hideMenus());
    }
  }, [dispatch, location, uploadMenu.storageId]);

  return {
    products,
    invalidProducts,
    setProducts,
    darkTheme,
    fileError,
    handleChange,
    handleSubmitProducts,
    loading,
    disableSubmitButton: products.filter((p) => p.selected).length === 0,
  };
};

export default useUploadMenu;
