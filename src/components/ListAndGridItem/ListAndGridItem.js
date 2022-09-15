import React from "react";

const ListAndGridItem = ({ children, id }) => {
  return <li id={id}>{children}</li>;
};

export default ListAndGridItem;
