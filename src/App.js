import { useState, useEffect } from "react";
import { Input, Icon, Button, List, Image, Header } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

import UserListItem from "./components/userListItem";
import PageNavigator from "./components/pageNavigator";

function App() {
  const [userList, setUserList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // takes page number as argument and fetches users data from API,
  // if search query is empty throws an alert message
  const fetchUsers = (page) => {
    if (searchQuery) {
      axios
        .get(
          `https://api.github.com/search/users?q=${searchQuery}&&page=${page}`
        )
        .then((res) => setUserList(res.data.items))
        .catch((error) => alert(error));
    } else alert("search query is empty");
  };

  return (
    <div className="App">
      <Input
        icon="users"
        focus
        iconPosition="left"
        placeholder="Search users..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Button
        className="submitButton"
        onClick={() => {
          fetchUsers();
          setPageNumber(1);
        }}
      >
        Submit
      </Button>

      <div className="usersContainer">
        {/* page navigator renders only when users list is not empty */}
        {userList.length !== 0 && (
          <PageNavigator
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            fetchUsers={fetchUsers}
          />
        )}

        {/* users list */}
        {userList.map((user, index) => {
          const { login, avatar_url } = user;
          return (
            <List animated verticalAlign="middle" key={index}>
              <UserListItem login={login} avatar_url={avatar_url} />
            </List>
          );
        })}

        {/* page navigator renders only when users list is not empty */}
        {userList.length !== 0 && (
          <PageNavigator
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            fetchUsers={fetchUsers}
          />
        )}
      </div>
    </div>
  );
}

export default App;
