import React from "react";
import { useQuery } from "urql";
import { QueryGetCategoryList } from "../api/queries/category/GetCategoryList";

export default () => {
  const [resCategory] = useQuery({
    query: QueryGetCategoryList,
    variables: ''
  });
  if (resCategory.fetching) {
    return "Loading...";
  } else if (resCategory.error) {
    return "Oh no!";
  } else if (resCategory.data) {
    return (
      <React.Fragment>
        <ul>
          {resCategory.data.categories.map(({ uuid, name }) => (
            <li key={uuid}>{name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  } else {
    return null;
  }
};