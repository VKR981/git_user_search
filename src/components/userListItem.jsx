import React from "react";
import { List, Image } from "semantic-ui-react";

export default function userListItem({ login, avatar_url }) {
  return (
    <List.Item>
      <Image avatar src={avatar_url} />
      <List.Content>
        <List.Header>{login}</List.Header>
      </List.Content>
    </List.Item>
  );
}
