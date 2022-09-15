import { Translate } from "components";
import {
  filterProductsBy,
  highlightProducts,
  sortByValues,
} from "constantStrings";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { SelectOption } from "utils";

const useToolbar = ({ componentName }) => {
  const orderByOptions = [
    new SelectOption(
      sortByValues.nameAsc,
      <Translate section={componentName} text="name" />,
      <IoChevronUp />
    ),
    new SelectOption(
      sortByValues.nameDesc,
      <Translate section={componentName} text="name" />,
      <IoChevronDown />
    ),
    new SelectOption(
      sortByValues.expDateAsc,
      <Translate section={componentName} text="expirationDate" />,
      <IoChevronDown />
    ),
    new SelectOption(
      sortByValues.expDateDesc,
      <Translate section={componentName} text="expirationDate" />,
      <IoChevronUp />
    ),
  ];

  const highlightOptions = [
    new SelectOption(
      highlightProducts.none,
      <Translate section={componentName} text="none" />
    ),
    new SelectOption(
      highlightProducts.closeToExpiry,
      <Translate section={componentName} text="closeToExpiry" />
    ),
    new SelectOption(
      highlightProducts.expired,
      <Translate section={componentName} text="expired" />
    ),
    new SelectOption(
      highlightProducts.all,
      <Translate section={componentName} text="all" />
    ),
  ];

  const filterOptions = [
    new SelectOption(
      filterProductsBy.all,
      <Translate section={componentName} text="showAll" />
    ),
    new SelectOption(
      filterProductsBy.closeToExpiry,
      <Translate section={componentName} text="closeToExpiry" />
    ),
    new SelectOption(
      filterProductsBy.expired,
      <Translate section={componentName} text="expired" />
    ),
  ];

  return { orderByOptions, highlightOptions, filterOptions };
};

export default useToolbar;
