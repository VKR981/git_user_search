import React from "react";
import { Input, Icon, Button, List, Image, Header } from "semantic-ui-react";

export default function pageNavigator({
  pageNumber,
  setPageNumber,
  fetchUsers,
}) {
  return (
    <div className="pageNavigator">
      <Icon
        name="angle left"
        link
        size="large"
        onClick={() => {
          if (pageNumber > 1) {
            fetchUsers(pageNumber - 1);
            setPageNumber(pageNumber - 1);
          }
        }}
      />
      <p>page: {pageNumber}</p>
      <Icon
        name="angle right"
        link
        size="large"
        onClick={() => {
          fetchUsers(pageNumber + 1);
          setPageNumber(pageNumber + 1);
        }}
      />
    </div>
  );
}
