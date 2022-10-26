import { Translate } from "components";
import { useIsDarkTheme } from "hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { createCollectionOfProducts, hideMenus } from "store/actions";

const handleJson = (text, storageId) => {
  const json = JSON.parse(text);

  return json
    .map((product) => {
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

      return product;
    })
    .filter((product) => product.productName);
};

const handleCSV = (text, storageId) => {
  const rows = text.split("\n");
  if (!rows?.length || rows.length === 1) return;

  rows.shift();

  const products = [];

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

    products.push(product);
  });

  return products.filter((product) => product.productName);
};

const useUploadMenu = ({ componentName, toggleMenu }) => {
  const darkTheme = useIsDarkTheme();

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const { storageId } = useSelector((state) => state.app.uploadMenu);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError("");
      return;
    }

    if (file.type !== "text/csv" && file.type !== "application/json") {
      setError(<Translate section={componentName} text="fileTypeError" />);
      return;
    }

    if (file.size > 2000000) {
      setError(<Translate section={componentName} text="fileSizeError" />);
      return;
    }

    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      const text = e.target.result;

      if (file.type === "application/json") {
        const productsFromJson = handleJson(text, storageId);
        setProducts(productsFromJson);
      } else {
        const productsFromCSV = handleCSV(text, storageId);
        setProducts(productsFromCSV);
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
    setProducts,
    darkTheme,
    error,
    handleChange,
    handleSubmitProducts,
    loading,
  };
};

export default useUploadMenu;
