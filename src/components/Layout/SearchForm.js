import { useIsDarkTheme } from "hooks";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";

const SearchForm = ({ alternativeStyles }) => {
  const darkTheme = useIsDarkTheme();

  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
