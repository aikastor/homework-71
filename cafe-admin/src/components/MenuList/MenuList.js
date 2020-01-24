import React from 'react';
import List from "@material-ui/core/List";

const MenuList = (props) => {
  return (
      <List dense={true}>
        {props.children}
      </List>
  );
};

export default MenuList;