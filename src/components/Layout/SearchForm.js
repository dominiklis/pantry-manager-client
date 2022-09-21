import { useGetSearch, useIsDarkTheme } from "hooks";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearch } from "store/actions";
import styles from "./SearchForm.module.css";

const SearchForm = ({ alternativeStyles }) => {
  const darkTheme = useIsDarkTheme();

  const searchQuery = useGetSearch();
  const { search } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchQuery !== search) {
      dispatch(setSearch(searchQuery));
      setSearchInput(searchQuery);
    }
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSearch(searchInput));

    if (searchInput) navigate(`/search?q=${searchInput}`);
  };

  const handleChange = (e) => setSearchInput(e.target.value);

  const getFormStyles = () => {
    let res = styles.form;

    if (alternativeStyles) res += ` ${styles.alternativeBackground}`;

    return res;
  };

  return (
    <form
      className={getFormStyles()}
      data-dark-theme={darkTheme}
      onSubmit={handleSubmit}
    >
      <button className={styles.button} data-dark-theme={darkTheme}>
        <IoSearch />
      </button>
      <input
        value={searchInput}
        onChange={handleChange}
        className={styles.input}
      />
    </form>
  );
};

export default SearchForm;
